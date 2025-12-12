import React from "react";
import "./Banner.style.css";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/chpWmskl3aKm1aTZqUHRCtviwPy.jpg&quot")`,
      }}
      className="banner-area"
    >
      <div className="banner-text-area">
        <h3>TRON: Ares</h3>
        <p>
          A highly sophisticated Program called Ares is sent from the digital
          world into the real world on a dangerous mission, marking humankind's
          first encounter with A.I. beings.
        </p>
      </div>
    </div>
  );
};

export default Banner;
