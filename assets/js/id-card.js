window.initIdCardLogic = function() {
    // 1. Theme Switcher Logic
    const buttons = document.querySelectorAll('.btn-theme');
    const card = document.getElementById('dynamic-card');
    const tierText = document.getElementById('card-tier-text');

    if(!buttons.length || !card) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            card.className = 'dynamic-id-card'; 
            
            const theme = btn.getAttribute('data-theme');
            card.classList.add(`theme-${theme}`);

            if(theme === 'regular') tierText.innerText = 'REGULAR';
            if(theme === 'vip') tierText.innerText = 'VIP MEMBER';
            if(theme === 'admin') tierText.innerText = 'ADMIN HUB';
        });
    });

    // 2. 3D Card Stage Logic
    const stage = document.getElementById('card-stage');
    const glare = document.getElementById('card-glare');

    if (!stage) return;

    stage.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 992) return; // Hanya nyala di desktop

        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        
        glare.style.opacity = '1';
        glare.style.transform = `translate(${x - rect.width}px, ${y - rect.height}px)`;
    });

    stage.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        glare.style.opacity = '0';
        card.style.transition = 'transform 0.5s ease-out';
    });

    stage.addEventListener('mouseenter', () => {
        card.style.transition = 'none'; 
    });
};