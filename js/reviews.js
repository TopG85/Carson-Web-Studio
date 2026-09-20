document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('reviews-container');
  if (!container) return;

  fetch('data/reviews.json')
    .then(function (response) {
      if (!response.ok) throw new Error('Could not load reviews');
      return response.json();
    })
    .then(function (reviews) {
      if (!Array.isArray(reviews) || reviews.length === 0) {
        container.innerHTML = '<p class="text-center text-blue-900">No reviews yet.</p>';
        return;
      }
      container.innerHTML = reviews.map(renderReviewCard).join('');
    })
    .catch(function (err) {
      console.error('Failed to load reviews:', err);
    });

  function renderStars(rating) {
    var safeRating = Math.max(0, Math.min(5, Math.round(rating || 0)));
    return '<span class="review-stars">' + '★'.repeat(safeRating) + '☆'.repeat(5 - safeRating) + '</span>';
  }

  function renderReviewCard(review) {
    return (
      '<div class="review-card">' +
        renderStars(review.rating) +
        '<p class="review-comment">&ldquo;' + review.comment + '&rdquo;</p>' +
        '<p class="review-meta"><strong>' + review.name + '</strong>' +
        (review.project ? ' &mdash; ' + review.project : '') +
        '</p>' +
      '</div>'
    );
  }
});