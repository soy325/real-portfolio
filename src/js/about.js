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

    const aboutConts = document.querySelectorAll('#about .cont');

    let visibleCount = 0;
  
    aboutConts.forEach((cont) => {
      ScrollTrigger.create({
        trigger: cont,
        start: "top center",
        end: "bottom center",
        onEnter: () => cont.classList.add('on'), // 화면에 진입 시 'on' 클래스 추가
        onEnterBack: () => cont.classList.add('on'), // 화면 뒤로 재진입 시 'on' 클래스 추가
        onLeave: () => cont.classList.remove('on'), // 화면을 벗어나면 'on' 클래스 제거
        onLeaveBack: () => cont.classList.remove('on') // 위 방향으로 벗어나면 'on' 클래스 제거
      });
    });
}