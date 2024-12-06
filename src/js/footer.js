export function footer() {
    const splide = new Splide('.splide', {
        type: 'loop',
        drag: false,
        focus: 'center',
        gap: 30,
        autoWidth: true,
        arrows: false,
        pagination: false,
        autoScroll: {
            speed: 2,
            pauseOnHover: true,
            rewind: false
        },
        breakpoint: {
            1200: { perPage: 3 },
            640: { perPage: 2 }
        }
    })
    splide.mount(window.splide.Extensions)
}

