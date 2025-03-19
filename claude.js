document.addEventListener('DOMContentLoaded', function() {
    // Get all sections that need to be tracked
    const sections = document.querySelectorAll('#home, #projects, #aboutMe, #contact');
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a, .hidden a');

    // Handle mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    
    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        // Animate hamburger to X
        const bars = menuBtn.querySelectorAll('div');
        bars[0].classList.toggle('rotate-45');
        bars[0].classList.toggle('translate-y-1.5');
        bars[1].classList.toggle('opacity-0');
        bars[2].classList.toggle('-rotate-45');
        bars[2].classList.toggle('-translate-y-1.5');
    });

    // Function to update active link
    function updateActiveLink() {
        let scrollPosition = window.scrollY;

        // Check each section's position and update the corresponding nav link
        sections.forEach(section => {
            let sectionTop = section.offsetTop - 100;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('text-[#151515]', 'font-medium', 'border-b-2', 'border-[#151515]', 'pb-2');
                    link.classList.add('text-gray-500');
                });
                
                // Add active class to matching links
                document.querySelectorAll(`a[href="#${sectionId}"]`).forEach(activeLink => {
                    activeLink.classList.remove('text-gray-500');
                    activeLink.classList.add('text-[#151515]', 'font-medium', 'border-b-2', 'border-[#151515]', 'pb-2');
                });
            }
        });
    }

    // Initial call to set active link on page load
    updateActiveLink();

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);

    // Handle click on navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Close mobile menu when link is clicked
            if (menu && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                // Reset hamburger button
                const bars = menuBtn.querySelectorAll('div');
                bars[0].classList.remove('rotate-45', 'translate-y-1.5');
                bars[1].classList.remove('opacity-0');
                bars[2].classList.remove('-rotate-45', '-translate-y-1.5');
            }
            
            // Only handle internal anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper for skill stack
    const skillSwiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            // When screen width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            // When screen width is >= 768px
            768: {
                slidesPerView: 6,
                spaceBetween: 30
            },
            // When screen width is >= 1024px
            1024: {
                slidesPerView: 8,
                spaceBetween: 30
            }
        }
    });
});