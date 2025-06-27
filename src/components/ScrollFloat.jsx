import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  animationDuration = 1.4,               // Slightly longer duration for impact
  ease = 'elastic.out(1, 0.5)',         // Bouncier easing for drama
  scrollStart = 'top 85%',              // Start earlier
  scrollEnd = 'bottom 50%',
  stagger = 0.06,                        // More time between letters
  fontSize = 'clamp(2rem, 10vw, 12rem)',// Bigger text for stronger presence
  color = '#ffffff',
  fontWeight = '900',
  textAlign = 'center',
  lineHeight = '1.3',
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span
        key={index}
        style={{
          display: 'inline-block',
          willChange: 'transform, opacity'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const charElements = el.querySelectorAll('span');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 200,                   // More dramatic rise
        rotateZ: 30,                     // Add subtle rotation
        scaleY: 2.5,
        scaleX: 0.6,
        transformOrigin: '50% 0%',
      },
      {
        duration: animationDuration,
        ease,
        opacity: 1,
        yPercent: 0,
        rotateZ: 0,
        scaleY: 1,
        scaleX: 1,
        stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  return (
    <h2
      ref={containerRef}
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign,
        fontSize,
        fontWeight,
        lineHeight,
        color,
        letterSpacing: '0.05em'
      }}
    >
      <span style={{ display: 'inline-block' }}>
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
