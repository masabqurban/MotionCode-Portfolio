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

    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray((prev) => [...prev, newRipple]);

    // Remove the ripple after animation
    setTimeout(() => {
      setRippleArray((prev) => prev.slice(1));
    }, 500);
  };

  return (
    <button
      disabled={disabled}
      className={`relative overflow-hidden text-white w-full px-5 py-2 outline-none font-medium text-base ${dynamicClasses}`}
      type={type}
      onClick={(e) => {
        createRipple(e);
        if (onClick) onClick(e);
      }}
    >
      {dynamicText}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {rippleArray.map((ripple, index) => (
          <span
            key={index}
            className={`absolute rounded-full bg-white bg-opacity-60 ripple-animation`}
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
