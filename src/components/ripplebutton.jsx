import { useState } from "react";

const RippleButton = ({
  dynamicText,
  onClick,
  disabled = false,
  type = "button",
  dynamicClasses = "",
}) => {
  const [rippleArray, setRippleArray] = useState([]);

  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size };

    setRippleArray((prev) => [...prev, newRipple]);

    // Remove the ripple after animation
    setTimeout(() => {
      setRippleArray((prev) => prev.slice(1));
    }, 500);
  };

  return (
    <button
      disabled={disabled}
      className={`ripple-button ${dynamicClasses}`}
      type={type}
      onClick={(e) => {
        if (!disabled) {
          createRipple(e);
          if (onClick) onClick(e);
        }
      }}
    >
      {dynamicText}
      <div className="ripple-container">
        {rippleArray.map((ripple, index) => (
          <span
            key={index}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </div>
    </button>
  );
};

export default RippleButton;
