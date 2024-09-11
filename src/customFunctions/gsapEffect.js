import gsap from "gsap";

gsap.registerEffect({
    name: "backgroundOpening",
    effect: (targets, ...config) => {
        return gsap.to(targets, {});
    },
    defaults: { duration: 2 },
    extendTimeline: true
});