window.initDashboardLogic = function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const adminView = document.getElementById('ui-admin');
    const memberView = document.getElementById('ui-member');

    if (toggleBtns.length === 0 || !adminView || !memberView) return;

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            toggleBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Get target view
            const targetView = btn.getAttribute('data-view');

            if (targetView === 'admin') {
                memberView.classList.remove('active');
                // Kasih delay dikit biar efek fade-in CSS nya jalan mulus
                setTimeout(() => adminView.classList.add('active'), 50);
            } else {
                adminView.classList.remove('active');
                setTimeout(() => memberView.classList.add('active'), 50);
            }
        });
    });
};