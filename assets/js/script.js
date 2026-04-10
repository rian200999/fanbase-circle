const loadSection = async (containerId, filePath) => {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const htmlText = await response.text();
        const container = document.getElementById(containerId);
        if (container) { container.innerHTML += htmlText; }
    } catch (error) { console.error(`Gagal memuat: ${filePath}`, error); }
};

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Load Sections
    await loadSection('app-content', './sections/hero.html');
    await loadSection('app-content', './sections/masalah.html');
    await loadSection('app-content', './sections/fitur.html');
    await loadSection('app-content', './sections/id-card.html');
    await loadSection('app-content', './sections/cara-kerja.html');
    await loadSection('app-content', './sections/dashboard.html');
    await loadSection('app-content', './sections/keunggulan.html');
    await loadSection('app-content', './sections/kategori.html');
    await loadSection('app-content', './sections/integrasi.html');
    await loadSection('app-content', './sections/statistik.html');
    await loadSection('app-content', './sections/klien.html');
    await loadSection('app-content', './sections/testimoni.html');
    await loadSection('app-content', './sections/harga.html');
    await loadSection('app-content', './sections/faq.html');
    await loadSection('app-content', './sections/cta.html');
    await loadSection('app-footer', './sections/footer.html');

    // 2. Init Logics
    if (typeof window.initHeroLogic === 'function') { window.initHeroLogic(); }
    if (typeof window.initMasalahLogic === 'function') { window.initMasalahLogic(); }
    if (typeof window.initFiturLogic === 'function') { window.initFiturLogic(); }
    if (typeof window.initIdCardLogic === 'function') { window.initIdCardLogic(); }
    if (typeof window.initCaraKerjaLogic === 'function') { window.initCaraKerjaLogic(); }
    if (typeof window.initDashboardLogic === 'function') { window.initDashboardLogic(); }
    if (typeof window.initKeunggulanLogic === 'function') { window.initKeunggulanLogic(); }
    if (typeof window.initKategoriLogic === 'function') { window.initKategoriLogic(); }
    if (typeof window.initIntegrasiLogic === 'function') { window.initIntegrasiLogic(); }
    if (typeof window.initStatistikLogic === 'function') { window.initStatistikLogic(); }
    if (typeof window.initKlienLogic === 'function') { window.initKlienLogic(); }
    if (typeof window.initTestimoniLogic === 'function') { window.initTestimoniLogic(); }
    if (typeof window.initHargaLogic === 'function') { window.initHargaLogic(); }
    if (typeof window.initFaqLogic === 'function') { window.initFaqLogic(); }
    if (typeof window.initCtaLogic === 'function') { window.initCtaLogic(); }
    if (typeof window.initFooterLogic === 'function') { window.initFooterLogic(); }

    // Init AOS
    if (typeof AOS !== 'undefined') { AOS.init({ once: true, duration: 800 }); }
});