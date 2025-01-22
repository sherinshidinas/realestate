import React, { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    direction === "left"
      ? imageIndex === 0
        ? setImageIndex(images.length - 1)
        : setImageIndex(imageIndex - 1)
      : imageIndex === images.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="images/arrow.png" alt="" />
          </div>
          <div className="fullScreenImage">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/images/arrow.png" className="right" alt="" />
          </div>

          <div className="closeButton" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="bigImage" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt="smallImages"
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
