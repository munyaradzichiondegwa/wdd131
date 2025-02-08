document.addEventListener('DOMContentLoaded', () => {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount = Number(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    
    document.getElementById('reviewCount').textContent = reviewCount;
});