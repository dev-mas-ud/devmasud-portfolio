import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useInView } from "react-intersection-observer";

const useTextSplit = (elementRef) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const animationRef = useRef(null);
  const splitInstanceRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      inViewRef(elementRef.current);
    }
  }, [elementRef, inViewRef]);

  useEffect(() => {
    if (inView && elementRef.current) {
      requestAnimationFrame(() => {
        // ✅ Split immediately (don’t wait for fonts)
        splitInstanceRef.current = new SplitType(elementRef.current, {
          types: "words, chars",
          wordClass: "split-word",
          charClass: "split-char",
          lineClass: "split-line",
        });

        // ✅ Animate only opacity/transform
        gsap.set(splitInstanceRef.current.chars, {
          opacity: 0,
          x: -50,
        });

        animationRef.current = gsap.to(splitInstanceRef.current.chars, {
          opacity: 1,
          x: 0,
          duration: 0.1,
          stagger: 0.07,
          ease: "power3.out",
          force3D: true,
        });

        return () => {
          animationRef.current?.kill?.();
          splitInstanceRef.current?.revert?.();
        };
      });
    }
  }, [inView]);

  return null;
};

export default useTextSplit;
