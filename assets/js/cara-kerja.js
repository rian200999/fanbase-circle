window.initCaraKerjaLogic = function() {
    const section = document.querySelector('.fc-how-it-works');
    const pathProgress = document.querySelector('.path-progress');
    const cards = document.querySelectorAll('.how-step-card');
    
    if (!section || !pathProgress || cards.length === 0) return;

    let isMobile = window.innerWidth <= 992;
    let sequenceInterval;
    let currentStep = 0;

    // Fungsi untuk nyalain lampu berurutan
    function runSequence() {
        // Reset semua
        cards.forEach(card => card.classList.remove('active-step'));
        
        if(currentStep > 2) {
            currentStep = 0; // Ulangi dari awal
        }

        // Nyalakan kartu saat ini
        cards[currentStep].classList.add('active-step');

        // Atur panjang garis
        let progressValue = 0;
        if(currentStep === 0) progressValue = 15;
        if(currentStep === 1) progressValue = 50;
        if(currentStep === 2) progressValue = 100;

        if (isMobile) {
            pathProgress.style.height = `${progressValue}%`;
            pathProgress.style.width = '100%';
        } else {
            pathProgress.style.width = `${progressValue}%`;
            pathProgress.style.height = '100%';
        }

        currentStep++;
    }

    // Pakai Intersection Observer biar animasinya jalan pas layarnya disorot aja
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jalankan animasi pertama kali langsung
                runSequence();
                // Looping tiap 2.5 detik
                sequenceInterval = setInterval(runSequence, 2500);
            } else {
                clearInterval(sequenceInterval);
                pathProgress.style.width = '0%';
                pathProgress.style.height = '0%';
                currentStep = 0;
                cards.forEach(card => card.classList.remove('active-step'));
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section);

    // Update isMobile kalau layarnya di-resize
    window.addEventListener('resize', () => {
        isMobile = window.innerWidth <= 992;
    });
};