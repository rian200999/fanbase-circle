window.initStatistikLogic = function() {
    const section = document.querySelector('.fc-stats');
    const counters = document.querySelectorAll('.counter');
    let animated = false; // Flag agar animasi cuma jalan sekali

    if (!section || counters.length === 0) return;

    // Fungsi animasi angka
    function startCounter() {
        if (animated) return;
        animated = true;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target'); // Ambil angka target
            const speed = 200; // Semakin besar semakin lambat

            const updateCount = () => {
                const count = +counter.innerText;
                const inc = Math.ceil(target / speed); // Hitung kenaikan

                if (count < target) {
                    counter.innerText = count + inc;
                    setTimeout(updateCount, 15); // Ulangi setiap 15ms
                } else {
                    counter.innerText = target; // Pastikan angkanya pas di target di akhir
                }
            };
            updateCount();
        });
    }

    // Pakai Intersection Observer biar animasi jalan pas disorot
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter();
            }
        });
    }, { threshold: 0.5 }); // Jalan pas 50% section kelihatan

    observer.observe(section);
};