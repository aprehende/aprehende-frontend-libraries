import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startRender?: React.ReactNode;
  endRender?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, startRender, endRender, ...rest }, ref) => {
    return (
      <button ref={ref} {...rest}>
        {startRender && <span>{startRender}</span>}
        {children}
        {endRender && <span>{endRender}</span>}
      </button>
    );
  }
);

export default Button;
