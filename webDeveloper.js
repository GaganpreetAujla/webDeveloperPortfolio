document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
});