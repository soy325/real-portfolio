const progress = document.querySelector('.progress')
const titles = document.querySelectorAll('.title')
const boxs = document.querySelectorAll('.box')

gsap.to(progress, {
    width: '100%',
    scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    }
})

const ani0 = gsap.timeline()
ani0.from('.sect1 .header', { autoAlpha: 0, xPercent: -200, duration: 1 }, 'text')
ScrollTrigger.create({
    animation: ani0,
    trigger: '.sect1',
    toggleActions: 'play pause none',
    start: 'top bottom'
})

const ani1 = gsap.timeline()
ani1.from('.sect2 b', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect2 .sect2-box', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani1,
    trigger: '.sect2',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani2 = gsap.timeline()
ani2.from('.sect3 b', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect3 .sect3-inner p', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
    .from('.sect3 img', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani2,
    trigger: '.sect3',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani3 = gsap.timeline()
ani3.from('.sect4 .motive b', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect4 .motive p', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
    .from('.sect4 .keyword p', { autoAlpha: 0, yPercent: -100, delay:1, duration: 0.5 }, 'text')
    .from('.sect4 .keyword img', { autoAlpha: 0, delay: 1.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani3,
    trigger: '.sect4',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani4 = gsap.timeline()
ani4.from('.sect5-inner b', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
ani4.from('.sect5-inner p', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ani4.from('.sect5 .h2', { autoAlpha: 0, yPercent: -50, delay: 1, duration: 0.5 }, 'text')
ani4.from('.sect5 .color figure', { autoAlpha: 0, delay: 1.5, duration: 0.5 }, 'text')
ani4.from('.sect5 .color div', { autoAlpha: 0, delay: 2, duration: 0.5 }, 'text')
ani4.from('.sect5 .typography b', { autoAlpha: 0, delay: 2.5, duration: 0.5 }, 'text')
ani4.from('.sect5 .typography .typo-box', { autoAlpha: 0, delay: 3, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani4,
    trigger: '.sect5',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})
