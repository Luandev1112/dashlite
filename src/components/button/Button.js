import React from "react";
import classNames from "classnames";

const Button = ({ color, size, className, outline, disabled, ...props }) => {
  const buttonClass = classNames({
    btn: true,
    [`btn-${color}`]: !outline,
    [`btn-outline-${color}`]: outline,
    [`btn-${size}`]: size,
    disabled: disabled,
    [`${className}`]: className,
  });
  return (
    <button className={buttonClass} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
