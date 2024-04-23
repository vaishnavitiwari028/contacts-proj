import React from "react";
import "./ImageThumb.css";

const ImageThumb = ({ firstName, lastName, src }) => {
  const randomColor = () => {
    let colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "violet",
      "brown",
      "magenda",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {src ? (
        <img src={src} className="image_thumbnail" alt="thumbnail" />
      ) : (
        <div
          className="image_thumbnail"
          style={{ backgroundColor: randomColor() }}
        >
          <span className="image_thumbnail_letter">
            {firstName[0]}
            {lastName[0]}
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageThumb;
