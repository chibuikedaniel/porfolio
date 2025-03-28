const swiper = new Swiper('.swiper', {
    loop: true, // Enable infinite loop
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 0,

});


const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
let open = false;

menuBtn.addEventListener('click', () => {
    open = !open;
    menu.classList.toggle('hidden');

    // Animate Hamburger to X
    menuBtn.children[0].classList.toggle('rotate-45', open);
    menuBtn.children[1].classList.toggle('hidden', open);
    menuBtn.children[2].classList.toggle('-rotate-45', open);

    // Adjust spacing for X effect
    menuBtn.children[0].classList.toggle('translate-y-1.5', open);
    menuBtn.children[2].classList.toggle('-translate-y-1.5', open);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
    let scrollY = window.scrollY + 200; // Adjust for navbar height

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove("active-link");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active-link");
                }
            });
        }
    });
}

window.addEventListener("scroll", setActiveLink);


document.addEventListener('DOMContentLoaded', function() {
    // Get all sections that need to be tracked
    const sections = document.querySelectorAll('#home, #projects, #aboutMe, #contact');
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a, .hidden a');

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


