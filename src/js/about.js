// import gsap from 'gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";

export function about() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".about_wrap .title1", {
      scrollTrigger: {
        trigger: ".about_wrap .cont01",
        start: "top top",
        toggleClass: { targets: '.about_wrap .title1', className: 'on' },
        scrub: 2,
      }
    });

    gsap.to(".about_wrap .title2", {
      scrollTrigger: {
        trigger: ".about_wrap .cont02",
        start: "top top",
        toggleClass: { targets: '.about_wrap .title2', className: 'on' },
        scrub: 2,
      }
    });

    gsap.to(".about_wrap .title3", {
      scrollTrigger: {
        trigger: ".about_wrap .cont03",
        start: "top top",
        toggleClass: { targets: '.about_wrap .title3', className: 'on' },
        scrub: 2,
      }
    });

    gsap.to(".about_wrap .title4", {
      scrollTrigger: {
        trigger: ".about_wrap .cont04",
        start: "top top",
        toggleClass: { targets: '.about_wrap .title4', className: 'on' },
        scrub: 2,
      }
    });
}