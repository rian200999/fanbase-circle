window.initTestimoniLogic = function() {
    const cards = document.querySelectorAll('.t-card');

    if (cards.length === 0) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth < 992) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // Touch support untuk mobile: pause saat disentuh
    const track = document.getElementById('testi-track');
    if(track) {
        track.addEventListener('touchstart', () => {
            track.style.animationPlayState = 'paused';
        }, {passive: true});
        track.addEventListener('touchend', () => {
            track.style.animationPlayState = 'running';
        });
    }
};