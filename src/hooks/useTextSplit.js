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
  const inViewTimerRef = useRef(null);
  const hasCompletedRef = useRef(false);
  const isCurrentlyInViewRef = useRef(false);

  useEffect(() => {
    if (elementRef.current) {
      inViewRef(elementRef.current);
    }
  }, [elementRef, inViewRef]);

  useEffect(() => {
    isCurrentlyInViewRef.current = inView;

    if (inView && !hasCompletedRef.current) {
      // Start 200-milliseconds timer when element enters view
      inViewTimerRef.current = setTimeout(() => {
        if (isCurrentlyInViewRef.current && !hasCompletedRef.current) {
          startAnimation();
        }
      }, 200);
    } else {
      clearTimeout(inViewTimerRef.current);
    }

    return () => {
      clearTimeout(inViewTimerRef.current);
    };
  }, [inView]);

  const startAnimation = () => {
    if (!elementRef.current || hasCompletedRef.current) return;

    hasCompletedRef.current = true;

    document.fonts?.ready?.then(() => {
      splitInstanceRef.current = new SplitType(elementRef.current, {
        types: "words, chars",
        wordClass: "split-word",
        charClass: "split-char",
        lineClass: "split-line",
      });

      const ctx = gsap.context(() => {
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
      }, elementRef);

      return () => {
        ctx.revert();
        splitInstanceRef.current?.revert?.();
      };
    }) || startAnimation(); // Fallback if document.fonts doesn't exist
  };

  return null;
};

export default useTextSplit;
