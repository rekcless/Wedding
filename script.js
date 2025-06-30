document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, /* relative to the viewport */
        rootMargin: '0px',
        threshold: 0.1 /* 10% of the section must be visible to trigger */
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: If you want the animation to run only once, uncomment next line
                // observer.unobserve(entry.target);
            } else {
                // Optional: If you want the animation to reset when out of view, uncomment next line
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
