
export function home() {

    const intro = gsap.timeline();
    intro.from('.ltText', { x: -1000, opacity: 0, duration: .35 });
    intro.from(".rtText", { x: 1000, opacity: 0, duration: .35 });
    intro.to(".ltText", { y: -150, opacity: 1, duration: .35 });
    intro.to(".rtText", { y: 150, opacity: 1, duration: .35 });

    intro.from(".my", { opacity: 0, duration: .5, scale: 1 });
    intro.to(".my", { opacity: 1, duration: .5, scale: 1.5 });
    // -------------------------------------------------------------------------
    const introzoom = gsap.timeline()
    introzoom.to('#intro h1', { scale: 60, opacity: 0, duration: 2 })
    ScrollTrigger.create({
        animation: introzoom,
        trigger: '#intro',
        start: "top top",
        // end: "+=1000",
        end: "bottom top",
        // anticipatePin: 1,
        pin: true,
        scrub: true,
    })
    
}
