import gsap from "gsap";

gsap.registerEffect({
    name: "background",
    effect: (targets, config) => {
        return gsap.to(targets, {
            top: config.top,
            duration: config.duration,
            ease: config.ease,
        });
    },
    defaults: { duration: 0.4, top:0, ease: 'power2.inOut'},
    extendTimeline: true
});

gsap.registerEffect({
    name: "listText",
    effect: (targets, config) => {
        return gsap.to(targets, {
            top: config.top,
            x: config.x,
            duration: config.duration,
            stagger: config.stagger,
            opacity: config.opacity,
            ease: config.ease,
        });
    },
    defaults: { top: 0, duration: 0.1, stagger: 0.08, opacity: 1, ease: 'power4.in'},
    extendTimeline: true
});