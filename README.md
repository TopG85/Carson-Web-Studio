
# Carson-Web-Studio

Carson Web Studio — Web Designer & Developer
I design and build modern, responsive websites for churches, charities and organisations.

🔗 **Live site:** [topg85.github.io/Carson-Web-Studio](https://topg85.github.io/Carson-Web-Studio/)

---

## 🚀 Recent Updates (September 2026)

- **New Project — Carb Counter & Dose Calculator:**
	- Added as a full case-study project page, plus a homepage "Recent Work" preview card
	- Links to both the [live app](https://topg85.github.io/carb-counter-app/) and [GitHub repo](https://github.com/TopG85/carb-counter-app)
- **Navigation — rebuilt from the ground up:**
	- Replaced the old hover-only dropdown with a click-based Projects menu (works reliably on both desktop and touch)
	- Added a working mobile hamburger menu, powered by a shared `js/nav.js` script
	- Fixed a z-index stacking bug where the open mobile menu was rendering behind the hero image
	- Fixed vertical alignment between "Projects" and the other nav links
- **Homepage:**
	- Added a "Recent Work" section with project preview cards (Carb Counter, Vinelife Church, Bitesize Church), each linking through to its full case study
	- Fixed a full-bleed hero width bug (hero background was overflowing/misaligned on certain screen widths)
- **Typography:**
	- Replaced Oswald/Bungee with **Poppins** (headings) and **Inter** (body text) for a bolder, more modern, more readable look
	- Fixed `.nunito-header` and several other utility classes that were referenced in HTML but never actually defined in the stylesheet
- **Responsive design:**
	- Added a fluid, range-based responsive system (using `clamp()` for text sizing) covering everything from folded phones (~240px) up to laptop-width tablets (~1366px)
	- Fixed the Projects dropdown's hover "dead zone" that caused it to close before you could click a link
- **Contact page:**
	- Replaced the "under construction" placeholder with a working contact form (Formspree-powered), alongside a direct email link
- **Client Reviews:**
	- Added a "Leave a Review" page (`leave-review.html`) where clients can submit a star rating and written comment
	- Built a custom JS star-rating picker (click to select, hover to preview) — replaced an earlier CSS-only version that had a rating-mismatch bug
	- Reviews are moderated: submissions save as unapproved by default and only appear on the homepage once manually approved
	- Originally built on Formspree (email-based moderation); migrated to **Firebase Firestore** for a faster, code-free approval workflow — approving a review is now a single click in the Firebase console instead of editing and pushing a JSON file
	- Added Firestore security rules restricting reads to approved reviews only, and preventing public edits or deletions
	- Homepage displays approved reviews as star-rated cards via `js/reviews.js`