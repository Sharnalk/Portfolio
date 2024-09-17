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

const setAttributes = element => attributes =>
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]))

const createSVG = () => document.createElementNS('http://www.w3.org/2000/svg', 'svg')

const createFromSVG = svg => name => document.createElementNS(svg.namespaceURI, name)

export const createSineWave = length => {
    if (length < 1)
        return undefined

    const svg = createSVG(),
        path = createFromSVG(svg)('path')

    setAttributes(svg)({
        viewBox: `0 0 ${length * 100} 100`,
        class: 'sine-wave'
    })

    setAttributes(path)({
        class: 'sine-wave-path',
        d: `M 0 50${Array(length + 2).fill().map((x, index) =>
            ` Q ${(index * 100) + 50} ${index % 2 === 0 ? 0 : 100}, ${(index + 1) * 100} 50`).join('')}`
    })

    svg.appendChild(path)
    return svg
}