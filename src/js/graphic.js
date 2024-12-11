// import gsap from 'gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";

export function graphic() {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = document.querySelector('#graphic')
    const articles = gsap.utils.toArray('.graphic__list')
    gsap.to(articles, {
        xPercent: -100 * (articles.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: horizontal,
            start: 'top+=1000 top',
            end: '+=1000',
            pin: true,
            scrub:true,
            // snap:'none'
            markers:true,
            // onEnter:()=>{
            //     horizontal.pin = true;
            //     // horizontal.refresh();
            // },
            // onLeave:()=>{
            //     horizontal.pin = false;
            //     // horizontal.refresh();
            // },
        }
    })

}