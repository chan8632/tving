import React from "react";
import "./Slider.style.css";
import { usePopularMovies } from "../../hook/usePopularMovie";
const Slider = () => {
  const { isLoading, data, isError, error } = usePopularMovies();
  console.log("dddddd", data);
  console.log("eee", error);
  return (
    <div>
      <h3>Popular</h3>
      <div
        className="poster-area"
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/w220_and_h330_face//hBj1aTnGf4564Klv9yIbSuB7Y8w.jpg&quot")`,
        }}
      ></div>
    </div>
  );
};

export default Slider;
