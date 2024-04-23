import React from "react";
import "./Segment.css";

const Segment = ({ children, ...otherProps }) => {
  return (
    <div className="segment_container" {...otherProps}>
      <div className="segment">{children}</div>
    </div>
  );
};

export default Segment;
