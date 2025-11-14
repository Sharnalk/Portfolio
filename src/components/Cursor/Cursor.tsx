import { useEffect, useRef } from "preact/hooks";
import gsap from "gsap";
import "./cursor.css";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (evt: MouseEvent) => {
      const { clientX: x, clientY: y } = evt;

      // le petit dot : suit instantanément
      gsap.set(cursorRef.current, { x, y });

      // le grand rond : suit avec une inertie
      gsap.to(dotRef.current, {
        x: x-22.5,
        y: y-22.5,
        duration: 1.25,
        ease: "elastic.inOut",
      });
    };

    const mousedown = (evt: MouseEvent) => {
      gsap.to(dotRef.current, {
        scale: 1.7,
        duration: 0.2,
        ease: "elastic.inOut",
      });
    };

    const mouseup = (evt: MouseEvent) => {
      gsap.to(dotRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "elastic.inOut",
      });
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", mousedown);
    document.addEventListener("mouseup", mouseup);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", mousedown);
      document.removeEventListener("mouseup", mouseup);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={cursorRef} className="cursor-dot" />
    </>
  );
}
