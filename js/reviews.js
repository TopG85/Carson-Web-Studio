import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, query, where, orderBy, getDocs }
    from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDq9Q8UbnAXgvQeSGd-hc9J2uOfqkSwJmk",
    authDomain: "carson-web-studio-reviews.firebaseapp.com",
    projectId: "carson-web-studio-reviews",
    storageBucket: "carson-web-studio-reviews.firebasestorage.app",
    messagingSenderId: "173684844543",
    appId: "1:173684844543:web:d53ca6ae630787688da9ca"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', async function () {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    try {
        const reviewsQuery = query(
            collection(db, 'reviews'),
            where('approved', '==', true),
            orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(reviewsQuery);

        if (snapshot.empty) {
            container.innerHTML = '<p class="text-center text-blue-900">No reviews yet.</p>';
            return;
        }

        const cards = [];
        snapshot.forEach(function (doc) {
            cards.push(renderReviewCard(doc.data()));
        });
        container.innerHTML = cards.join('');
    } catch (err) {
        console.error('Failed to load reviews:', err);
        container.innerHTML = '';
    }

    function renderStars(rating) {
        const safeRating = Math.max(0, Math.min(5, Math.round(rating || 0)));
        return '<span class="review-stars" aria-label="' + safeRating + ' out of 5 stars">' +
            '★'.repeat(safeRating) + '☆'.repeat(5 - safeRating) + '</span>';
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str || '';
        return div.innerHTML;
    }

    function renderReviewCard(review) {
        return (
            '<div class="review-card">' +
                renderStars(review.rating) +
                '<p class="review-comment">&ldquo;' + escapeHtml(review.comment) + '&rdquo;</p>' +
                '<p class="review-meta"><strong>' + escapeHtml(review.name) + '</strong>' +
                (review.project ? ' &mdash; ' + escapeHtml(review.project) : '') +
                '</p>' +
            '</div>'
        );
    }
});