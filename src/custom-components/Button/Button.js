import React from "react";
import "./Button.css";

const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps} className="btn">
      {children}
    </button>
  );
};

export default Button;
