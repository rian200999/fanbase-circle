window.initHargaLogic = function() {
    const toggleInput = document.getElementById('billing-checkbox');
    const labelBulan = document.getElementById('label-bulan');
    const labelTahun = document.getElementById('label-tahun');
    
    // Element harga yang mau diubah
    const pricePro = document.getElementById('price-pro');

    if (!toggleInput || !pricePro) return;

    // Set kondisi awal (Bulanan)
    labelBulan.classList.add('active');

    toggleInput.addEventListener('change', () => {
        if (toggleInput.checked) {
            // Jika Tahunan (Misal diskon jadi 80K per bulan, ditagih tahunan)
            labelBulan.classList.remove('active');
            labelTahun.classList.add('active');
            
            // Animasi ganti angka kecil-kecilan
            pricePro.style.opacity = '0';
            setTimeout(() => {
                pricePro.innerHTML = 'Rp 80K<span>/bln</span>';
                pricePro.style.opacity = '1';
            }, 200);

        } else {
            // Jika Bulanan kembali
            labelTahun.classList.remove('active');
            labelBulan.classList.add('active');
            
            pricePro.style.opacity = '0';
            setTimeout(() => {
                pricePro.innerHTML = 'Rp 99K<span>/bln</span>';
                pricePro.style.opacity = '1';
            }, 200);
        }
    });
};