import { useRef } from "react";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);

    if (overlayRef.current) {
      overlayRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`;
    }
  };

  const handleMouseEnter = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = 0.6;
  };

  const handleMouseLeave = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = 0;
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        position: "relative",
        borderRadius: "1.5rem",
        border: "1px solid #222",
        backgroundColor: "#111",
        padding: "2rem",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        willChange: "transform",
      }}
    >
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(circle at 50% 50%, ${spotlightColor}, transparent 80%)`,
          opacity: 0,
          transition: "opacity 0.4s ease, background 0.2s ease",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default SpotlightCard;
