window.initFaqLogic = function() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        questionBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // 1. Tutup semua FAQ yang sedang terbuka
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            // 2. Kalau yang diklik sebelumnya ketutup, maka buka
            if (!isOpen) {
                item.classList.add('active');
                // ScrollHeight ngambil tinggi asli kontennya biar transisi CSS jalan
                answer.style.maxHeight = answer.scrollHeight + "px"; 
            }
        });
    });
};