// import gsap from 'gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";

export function graphic() {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = document.querySelector('#graphic')
    // const graphicArea = horizontal.parentElement
    // console.log(graphicArea);
    const articles = gsap.utils.toArray('.graphic__list')
    const graphic = gsap.to(articles, {
        xPercent: -100 * (articles.length - 1),
        ease: "none",
        
        scrollTrigger: {
            trigger: horizontal,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            scrub:true,
            // pinSpacing: true,
            // snap:'none'
            // markers:true,
            onEnter:()=>{
                graphic.scrollTrigger.pin = true;
                graphic.scrollTrigger.refresh();
            },
            onLeave:()=>{
                graphic.scrollTrigger.pin = false;
            },
        }
    })
}