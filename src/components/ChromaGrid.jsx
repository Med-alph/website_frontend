import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const demo = [
  {
    image: "https://i.pravatar.cc/300?img=8",
    title: "Alex Rivera",
    subtitle: "Full Stack Developer",
    handle: "@alexrivera",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "https://github.com/",
  },
  {
    image: "https://i.pravatar.cc/300?img=11",
    title: "Jordan Chen",
    subtitle: "DevOps Engineer",
    handle: "@jordanchen",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg, #10B981, #000)",
    url: "https://linkedin.com/in/",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Morgan Blake",
    subtitle: "UI/UX Designer",
    handle: "@morganblake",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
    url: "https://dribbble.com/",
  },
];

const ChromaGrid = ({ items = demo, columns = 3 }) => {
  const rootRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: 0.45,
      ease: "power3.out",
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "2rem",
        padding: "2rem",
        position: "relative",
        width: "100%",
        "--x": "50%",
        "--y": "50%",
        perspective: "1000px",
      }}
    >
      {items.map((c, i) => (
        <div
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={{
            background: c.gradient,
            border: `2px solid ${c.borderColor}`,
            borderRadius: "20px",
            padding: "1.5rem",
            cursor: "pointer",
            textAlign: "center",
            boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            color: "white",
            transition: "transform 0.8s ease",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <h3 style={{ fontSize: "1.2rem", margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: "0.85rem", color: "#aaa", margin: "0.4rem 0" }}>
            {c.handle}
          </p>
          <p style={{ fontSize: "0.95rem", color: "#ccc", margin: 0 }}>
            {c.subtitle}
          </p>
        </div>
      ))}

      {/* Glow hover */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 60%)",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;
