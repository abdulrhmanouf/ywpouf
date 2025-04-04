// Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    // Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            
            // Animation effect
            cartCount.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 300);
            
            // Product added notification
            const productTitle = this.closest('.product-card').querySelector('.product-title').textContent;
            alert(`تم إضافة ${productTitle} إلى سلة التسوق`);
        });
    });
    
    // Sidebar toggle for mobile
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            alert(`سيتم البحث عن: ${searchTerm}`);
            
        }
    });
    
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
    
    
});
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Smooth scroll to top
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    
    setTimeout(() => {
        backToTopButton.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }, 1000);
});
function smoothScrollToTop(duration = 1000) {
    const start = window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(timestamp) {
const currentTime = timestamp || performance.now();
const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, start * (1 - easeInOutCubic(progress)));

if (timeElapsed < duration) {
        requestAnimationFrame(scrollStep);
}
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(scrollStep);
}


document.getElementById('back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollToTop(800); 
});