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


