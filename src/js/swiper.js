export function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        // spaceBetween: 10,
        loop: true,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next",
        },
        breakpoints: {
                768: {
                  slidesPerView: "auto",  
                  spaceBetween: 30,   
                },}
    });
}
