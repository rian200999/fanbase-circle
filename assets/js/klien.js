window.initKlienLogic = function () {
    const marquees = document.querySelectorAll('.marquee-track');

    if (marquees.length === 0) return;

    marquees.forEach(track => {
        // Fitur tambahan khusus untuk Mobile/Touch Screen
        // Saat layar disentuh & ditahan, animasi berhenti
        track.addEventListener('touchstart', () => {
            track.style.animationPlayState = 'paused';
        }, { passive: true });

        // Saat sentuhan dilepas, animasi jalan lagi
        track.addEventListener('touchend', () => {
            track.style.animationPlayState = 'running';
        });

        // Opsional: Kalau kamu mau drag-to-scroll, logic-nya bisa ditaruh di sini
        // Tapi untuk sekarang, CSS auto-scroll + touch pause udah paling optimal.
    });

    /* CATATAN BUAT BACKEND:
    Kalau nanti daftar komunitas ini diambil dari Database MySQL (API), 
    kamu bisa bikin logic untuk "clone Node" di sini, 
    jadi kamu nggak perlu nulis manual duplikat div-nya di HTML.
    */
};