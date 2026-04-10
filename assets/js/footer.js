window.initFooterLogic = function() {
    const backToTopBtn = document.querySelector('.btn-back-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
};