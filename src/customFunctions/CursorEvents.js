import { gsap } from 'gsap';

export function cursorPosition(el) {
    document.addEventListener('mousemove', (e) => {
        gsap.to(el, {
            x: e.pageX - 13.5,
            y: e.pageY - 13.5,
            duration: 0.1,
            ease: "power2.out"
        });
    });
}
export function cursorScale(el) {
    document.addEventListener('mousedown', () => {
        gsap.to(el, { scale: 1.7, duration: 0.2, ease: "elastic(0.5, 0.5)" });
    });

    document.addEventListener('mouseup', () => {
        gsap.to(el, { scale: 1, duration: 0.2, ease: "elastic(0.5, 0.5)" });
    });
}