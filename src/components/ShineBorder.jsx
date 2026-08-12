import React from 'react';

const ShineBorder = ({
  borderWidth = 1,
  duration = 8,
  shineColor = "#000000",
  className = "",
  style = {},
  ...props
}) => {
  const colors = Array.isArray(shineColor) ? shineColor.join(", ") : shineColor;

  return (
    <div
      style={{
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        backgroundImage: `conic-gradient(from var(--border-angle), transparent 42%, ${colors}, transparent 58%)`,
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMaskComposite: 'xor',
        padding: "var(--border-width)",
        ...style,
      }}
      className={`animate-border-rotate pointer-events-none absolute inset-0 w-full h-full rounded-[inherit] ${className}`}
      {...props}
    />
  );
};

export default ShineBorder;

