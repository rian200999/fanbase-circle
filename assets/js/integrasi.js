window.initIntegrasiLogic = function () {
    const terminalBody = document.getElementById('payment-logs');
    if (!terminalBody) return;

    // Skenario log pembayaran yang bakal diputar
    const paymentScenarios = [
        { method: "QRIS", amount: "20.000", user: "Rian H." },
        { method: "GoPay", amount: "50.000", user: "Dina M." },
        { method: "Bank BCA", amount: "150.000", user: "Anton W." },
        { method: "OVO", amount: "20.000", user: "Reza S." }
    ];

    let scenarioIndex = 0;

    function addLog() {
        // Biar terminal nggak kepanjangan, maksimal 6 baris
        if (terminalBody.children.length > 6) {
            terminalBody.removeChild(terminalBody.firstChild); // Hapus log paling atas
        }

        const data = paymentScenarios[scenarioIndex];
        const now = new Date();
        const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

        const logEntry = document.createElement('div');
        logEntry.className = 'log-line';

        // Log Format: [14:05:22] VERIFIED: Rp 20.000 via QRIS (Rian H.)
        logEntry.innerHTML = `
            <span class="log-time">[${timeString}]</span>
            <span class="log-status">RCV_PAYLOAD:</span> Rp ${data.amount} via ${data.method} <br>
            <span style="padding-left: 65px;"><span class="log-success">VERIFIED ✓</span> Database kas updated (${data.user})</span>
        `;

        terminalBody.appendChild(logEntry);

        scenarioIndex++;
        if (scenarioIndex >= paymentScenarios.length) {
            scenarioIndex = 0; // Looping ke skenario awal
        }
    }

    // Jalankan log otomatis setiap 3.5 detik
    setInterval(addLog, 3500);
};