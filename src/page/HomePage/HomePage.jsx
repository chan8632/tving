import React from "react";
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider/Slider";
import { usePopularMovies } from "../../hook/usePopularMovie";

const HomePage = () => {
  const { isLoading, data } = usePopularMovies();
  console.log("hhh", isLoading);
  console.log("ddd", data);
  return (
    <div>
      <Banner data={data} />
      <Slider data={data} />
    </div>
  );
};

export default HomePage;
