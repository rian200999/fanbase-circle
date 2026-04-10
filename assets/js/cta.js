window.initCtaLogic = function() {
    const banner = document.querySelector('.cta-banner');
    const ornaments = document.querySelectorAll('.cta-ornament');

    if (!banner || ornaments.length === 0) return;

    banner.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 992) return;

        const rect = banner.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        ornaments.forEach((orn, idx) => {
            // Makin besar index-nya, makin kuat efek geraknya (depth effect)
            const speed = (idx + 1) * 20;
            const moveX = (x - centerX) / speed;
            const moveY = (y - centerY) / speed;

            orn.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    banner.addEventListener('mouseleave', () => {
        ornaments.forEach(orn => {
            orn.style.transform = `translate(0, 0)`;
            orn.style.transition = 'transform 0.5s ease-out';
        });
    });
};