window.initKategoriLogic = function() {
    const panels = document.querySelectorAll('.kat-panel');

    if (panels.length === 0) return;

    panels.forEach(panel => {
        // Menggunakan klik agar lebih bersahabat untuk mobile dan desktop
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });
        
        // Opsional: Kalau mau pakai hover di desktop (buka comment di bawah ini)
        
        panel.addEventListener('mouseenter', () => {
            if(window.innerWidth > 992) {
                removeActiveClasses();
                panel.classList.add('active');
            }
        });
        
    });

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    }
};