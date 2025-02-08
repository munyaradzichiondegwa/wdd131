document.addEventListener('DOMContentLoaded', () => {
    function updateFooterTime() {
      const footerTimeElement = document.getElementById('footer-time');
      if (footerTimeElement) {
        const now = new Date();
        const dateTimeString = now.toLocaleString(); 
        footerTimeElement.textContent = dateTimeString;
      }
    }

    updateFooterTime(); // Initial update
    setInterval(updateFooterTime, 60000); // Update every minute (60000 milliseconds)
    const products = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];
      
      const productSelect = document.getElementById('product');
      
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id;
          option.text = product.name;
          productSelect.add(option);
      });
});

  window.addEventListener('load', function() {
    const params = new URLSearchParams(window.location.search);
    if (params.size > 0) {
        let count = localStorage.getItem('reviewCount') || 0;
        count = parseInt(count) + 1;
        localStorage.setItem('reviewCount', count);
        document.getElementById('reviewCount').textContent = count;
    }
});