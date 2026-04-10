window.initLayananLogic = function() {
    const chatPile = document.querySelector('.chat-pile');
    // Kata-kata khas grup komunitas
    const messages = [
        "Min, kas bulan ini brp?", 
        "Kopdar besok bawa apa aja?", 
        "[Mengirim Stiker Lucu]", 
        "P", 
        "Iuran atas nama Rian udah ya min", 
        "Link absen mana woy"
    ];

    if (chatPile) {
        setInterval(() => {
            const msg = messages[Math.floor(Math.random() * messages.length)];
            const div = document.createElement('div');
            div.className = 'bubble';
            // Kalau kata-katanya stiker, kasih class glitch biar warna merah
            if(msg.includes("Stiker")) {
                div.classList.add("glitch");
            }
            div.innerText = msg;
            
            // Efek nambah pesan di bawah
            chatPile.appendChild(div);
            
            // Hapus yang atas biar gak numpuk
            if (chatPile.children.length > 3) {
                chatPile.removeChild(chatPile.firstChild);
            }
        }, 2500);
    }
};