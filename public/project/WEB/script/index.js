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
ani0.from('.sect1 .header', { autoAlpha: 0, xPercent: 300, duration: 1 }, 'text')
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
    .from('.sect3 .sect3-box', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani2,
    trigger: '.sect3',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani3 = gsap.timeline()
ani3.from('.sect4 b', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect4 .sect4-box', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani3,
    trigger: '.sect4',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani4 = gsap.timeline()
ani4.from('.sect5-box', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect5-inner', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani4,
    trigger: '.sect5',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani5 = gsap.timeline()
ani5.from('.sect6 b', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect6-inner', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani5,
    trigger: '.sect6',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani6 = gsap.timeline()
ani6.from('.sect7 p', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect7-box', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani6,
    trigger: '.sect7',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani7 = gsap.timeline()
ani7.from('.sect8 b', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect8-inner', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
    .from('.sect8-arrow', { autoAlpha: 0, yPercent: -50, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani7,
    trigger: '.sect8',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani8 = gsap.timeline()
ani8.from('.sect9 b', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect9-box', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani8,
    trigger: '.sect9',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani9 = gsap.timeline()
ani9.from('.sect10 b', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect10-inner', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani9,
    trigger: '.sect10',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani10 = gsap.timeline()
ani10.from('.sect11 b', { autoAlpha: 0, yPercent: -200, duration: 0.5 }, 'text')
    .from('.sect11-left', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
    .from('.sect11-right', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani10,
    trigger: '.sect11',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani11 = gsap.timeline()
ani11.from('.sect12-left', { autoAlpha: 0, delay: 0.5, duration: 0.5 }, 'text')
    .from('.sect12-right', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani11,
    trigger: '.sect12',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani12 = gsap.timeline()
ani12.from('.sect14-img', {  autoAlpha: 0, yPercent: -200, duration: 1  }, 'text')
    .from('.sect14-desc', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani12,
    trigger: '.sect14',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani13 = gsap.timeline()
ani13.from('.sect15-img', {  autoAlpha: 0, yPercent: -200, duration: 1  }, 'text')
    .from('.sect15-desc', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani13,
    trigger: '.sect15',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani14 = gsap.timeline()
ani14.from('.sect16-img', {  autoAlpha: 0, yPercent: -200, duration: 1  }, 'text')
    .from('.sect16-desc', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani14,
    trigger: '.sect16',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani15 = gsap.timeline()
ani15.from('.sect17-img', {  autoAlpha: 0, yPercent: -200, duration: 1  }, 'text')
    .from('.sect17-desc', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani15,
    trigger: '.sect17',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani16 = gsap.timeline()
ani16.from('.sect18-img', {  autoAlpha: 0, yPercent: -200, duration: 1  }, 'text')
    .from('.sect18-desc', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani16,
    trigger: '.sect18',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani17 = gsap.timeline()
ani17.from('.sect19-img', {  autoAlpha: 0, yPercent: -200, duration: 1  }, 'text')
    .from('.sect19-desc', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani17,
    trigger: '.sect19',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani18 = gsap.timeline()
ani18.from('.sect20-img', {  autoAlpha: 0, yPercent: -200, duration: 1  }, 'text')
    .from('.sect20-desc', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani18,
    trigger: '.sect20',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})

const ani19 = gsap.timeline()
ani19.from('.sect21-img', {  autoAlpha: 0, yPercent: -200, duration: 1  }, 'text')
    .from('.sect21-desc', { autoAlpha: 0, delay: 1, duration: 0.5 }, 'text')
ScrollTrigger.create({
    animation: ani19,
    trigger: '.sect21',
    toggleActions: 'play pause none',
    start: 'top center',
    end: 'bottom top'
})
