gsap.to('.b2 h2', {
    duration: 1,
    y: 0,
    scale: 2,
    autoAlpha: 1,
    scrollTrigger: {
        trigger: '.b2 h2',
        // markers: true,
        // trigger scroller
        start: 'top 20%',
        end: 'bottom 10%',
        // onEnter onLeave onEnterBack onLeaveBack
        toggleActions: 'play none reverse reverse',
        onEnter: () => console.log('enter'),
        onLeave: () => console.log('leave'),
        onEnterBack: () => console.log('enterBack'),
        onLeaveBack: () => console.log('leaveBack'),
        scrub: 1,
    },
})

// gsap.to('.b2', {
//     scrollTrigger: {
//         trigger: '.b2',
//         pin: true,
//         markers: true,
//     },
// })

ScrollTrigger.create({
    trigger: '.b2',
        pin: true,
        markers: true,
})