document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    const observerOptions = {
        threshold: 0.8
    };

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('aria-valuenow') + '%';
                progressBar.style.width = targetWidth;
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => progressObserver.observe(bar));

    // Animate cards on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    animateElements.forEach(el => animationObserver.observe(el));

    // Smooth tab transitions
    const tabLinks = document.querySelectorAll('[data-bs-toggle="tab"]');
    
    tabLinks.forEach(link => {
        link.addEventListener('shown.bs.tab', (e) => {
            const targetContent = document.querySelector(e.target.getAttribute('data-bs-target'));
            targetContent.querySelectorAll('.animate-on-scroll').forEach(el => {
                el.classList.add('visible');
            });
        });
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            boundary: 'window'
        });
    });

    // Print functionality for strategy tables
    document.querySelectorAll('.print-strategy').forEach(btn => {
        btn.addEventListener('click', () => {
            const table = btn.closest('.table-responsive').querySelector('table');
            const win = window.open('');
            win.document.write('<style>' + 
                'table { border-collapse: collapse; width: 100%; }' +
                'th, td { padding: 0.75rem; border: 1px solid #dee2e6; }' +
                'th { background-color: #006b3f; color: white; }' +
                'tr:nth-child(even) { background-color: #f8f9fa; }' +
                '</style>');
            win.document.write(table.outerHTML);
            win.print();
            win.close();
        });
    });
});