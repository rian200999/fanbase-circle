window.initHeroLogic = function() {
    const zone = document.getElementById('hero-interaction-zone');
    const rianCard = document.getElementById('card-rian');
    const mootiaraCard = document.getElementById('card-mootiara');

    if (!zone || !rianCard) return;

    zone.addEventListener('mousemove', (e) => {
        const rect = zone.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Hitung sudut kemiringan
        const rotX = ((y - centerY) / centerY) * -15;
        const rotY = ((x - centerX) / centerX) * 15;

        // Pas hover, kita kasih offset tambahan biar fanning out-nya makin asik
        rianCard.style.transform = `
            rotateX(${rotX}deg) 
            rotateY(${rotY - 5}deg) 
            translateX(-60px) 
            translateZ(50px)
        `;
        
        mootiaraCard.style.transform = `
            rotateX(${rotX + 5}deg) 
            rotateY(${rotY - 15}deg) 
            translateX(100px) 
            translateY(-40px) 
            translateZ(20px)
        `;
    });

    zone.addEventListener('mouseleave', () => {
        // Balikin ke posisi tumpukan awal
        rianCard.style.transform = `rotateY(-10deg) rotateX(5deg)`;
        mootiaraCard.style.transform = `rotateY(-15deg) rotateX(10deg) translateZ(-80px) translateY(-20px) translateX(30px)`;
        
        rianCard.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        mootiaraCard.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    });
};