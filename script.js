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