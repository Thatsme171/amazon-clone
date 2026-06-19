document.addEventListener('DOMContentLoaded', () => {
    
    // Elements
    const cartCounter = document.getElementById('cart-counter');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const panelOps = document.querySelector('.panel-ops');
    
    // Cart Counter Logic
    let cartCount = 0;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Increment counter
            cartCount++;
            cartCounter.textContent = cartCount;
            
            // Animation effect for button
            this.textContent = "Added!";
            this.style.backgroundColor = "#e7f4e4";
            this.style.boxShadow = "inset 0 0 0 1px #228b22";
            
            // Revert button text after 2 seconds
            setTimeout(() => {
                this.textContent = "Add to Cart";
                this.style.backgroundColor = "#ffd814";
                this.style.boxShadow = "0 2px 5px rgba(213,217,217,.5)";
            }, 2000);
            
            // Pop animation on cart icon
            const cartIcon = document.querySelector('.nav-cart i');
            cartIcon.style.transform = "scale(1.2)";
            setTimeout(() => {
                cartIcon.style.transform = "scale(1)";
            }, 200);
            cartIcon.style.transition = "transform 0.2s ease";
        });
    });

    // Mobile Menu Toggle (Basic implementation)
    if (mobileMenuBtn && panelOps) {
        mobileMenuBtn.addEventListener('click', () => {
            // On smaller screens, toggle visibility of the options panel
            if (window.innerWidth <= 480) {
                if (panelOps.style.display === 'flex') {
                    panelOps.style.display = 'none';
                } else {
                    panelOps.style.display = 'flex';
                    panelOps.style.flexDirection = 'column';
                    panelOps.style.width = '100%';
                    panelOps.style.backgroundColor = 'var(--secondary-bg)';
                    panelOps.style.padding = '10px';
                }
            }
        });
    }

    // Smooth Scroll to Top
    const backToTop = document.querySelector('.foot-panel1');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
