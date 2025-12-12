import "./Slider.style.css";
const Slider = ({ data }) => {
  const result = data?.results;
  return (
    <div>
      <h3>Popular</h3>
      {result.map((movie) => (
        <div
          className="poster-area"
          style={{
            backgroundImage: `url("https://www.themoviedb.org/t/p/w220_and_h330_face//${movie?.backdrop_path}.jpg&quot")`,
          }}
          key={movie?.id}
        ></div>
      ))}
    </div>
  );
};

export default Slider;
