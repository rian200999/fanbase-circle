window.initFiturLogic = function () {
    const nodes = document.querySelectorAll('.feature-node');

    // Efek interaktif sederhana saat scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    }, { threshold: 0.5 });

    nodes.forEach(node => {
        observer.observe(node);

        // Animasi aliran data "Spark" pada sirkuit
        setInterval(() => {
            const line = node.querySelector('.connector-line');
            if (line) {
                // Glow warna kuning emas saat ada data ngalir
                line.style.boxShadow = "0 0 15px #FFFF00";
                line.style.background = "#FFFF00";

                setTimeout(() => {
                    line.style.boxShadow = "none";
                    // Kembalikan ke gradien olive
                    if (node.classList.contains('f-finance') || node.classList.contains('f-idcard')) {
                        line.style.background = "linear-gradient(-90deg, #808000, transparent)";
                    } else {
                        line.style.background = "linear-gradient(90deg, #808000, transparent)";
                    }
                }, 600);
            }
        }, Math.random() * 4000 + 2000);
    });
};