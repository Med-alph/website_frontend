import React, { useEffect } from "react";

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}) => {
  // Inject keyframes only once
  useEffect(() => {
    const styleId = "star-border-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        @keyframes star-movement-bottom {
          0% {
            transform: translate(0%, 0%);
            opacity: 1;
          }
          100% {
            transform: translate(-100%, 0%);
            opacity: 0;
          }
        }

        @keyframes star-movement-top {
          0% {
            transform: translate(0%, 0%);
            opacity: 1;
          }
          100% {
            transform: translate(100%, 0%);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <Component
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      {/* Bottom animation */}
      <div
        style={{
          position: "absolute",
          width: "300%",
          height: "50%",
          opacity: 0.7,
          bottom: "-12px",
          right: "-250%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-bottom ${speed} linear infinite alternate`,
          zIndex: 0,
        }}
      ></div>

      {/* Top animation */}
      <div
        style={{
          position: "absolute",
          width: "300%",
          height: "50%",
          opacity: 0.7,
          top: "-12px",
          left: "-250%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-top ${speed} linear infinite alternate`,
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          border: "1px solid #222",
          background: "#000",
          color: "white",
          fontSize: 16,
          textAlign: "center",
          padding: "16px 26px",
          borderRadius: "20px",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
