import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...rest }, ref) => {
  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  );
});

export default Button;
