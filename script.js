// Responsive navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
	contactForm.addEventListener('submit', function(e) {
		e.preventDefault();
		alert('Thank you for reaching out! I will get back to you soon.');
		contactForm.reset();
	});
}
