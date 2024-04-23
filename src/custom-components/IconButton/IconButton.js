import React from "react";
import "./IconButton.css";

const IconButton = ({ icon, color, ...otherProps }) => {
  return (
    <button className="icon_buttonicon_button" {...otherProps}>
      <i className={`fas fa-${icon}`} style={{ color: `${color}` }}></i>
    </button>
  );
};

export default IconButton;
