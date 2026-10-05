document.addEventListener('DOMContentLoaded', function() {
    
    // Обработка формы обратной связи
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const message = document.getElementById('formMessage');
            if (message) {
                message.style.display = 'block';
                form.reset();
                setTimeout(() => {
                    message.style.display = 'none';
                }, 5000);
            }
        });
    }

    // Сортировка туров по цене
    const sortSelect = document.getElementById('sortPrice');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const grid = document.getElementById('toursGrid');
            if (!grid) return;
            const cards = Array.from(grid.children);
            
            cards.sort((a, b) => {
                const priceA = parseInt(a.dataset.price || 0);
                const priceB = parseInt(b.dataset.price || 0);
                return this.value === 'asc' ? priceA - priceB : priceB - priceA;
            });
            
            grid.innerHTML = '';
            cards.forEach(card => grid.appendChild(card));
        });
    }

    // Подсветка активного пункта меню
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});