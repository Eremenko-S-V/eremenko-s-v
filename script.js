document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${Math.min(index * 0.04, 0.28)}s`;
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.06, rootMargin: '0px 0px -32px 0px' }
    );

    cards.forEach((card) => observer.observe(card));

    document.querySelectorAll('.tags span').forEach((tag) => {
        tag.addEventListener('click', function onTagClick() {
            this.style.transform = 'scale(0.94)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
