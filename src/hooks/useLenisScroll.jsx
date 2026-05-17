import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
  duration: 1.4,
  smoothWheel: true,
  smoothTouch: false,
  touchMultiplier: 1.5,
  wheelMultiplier: 1,
  easing: (t) => 1 - Math.pow(1 - t, 4),
});

window.lenis = lenis;

    let frameId;

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);
}