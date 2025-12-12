import "./Banner.style.css";
const Banner = ({ data }) => {
  const popularFirst = data?.results[0];

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${popularFirst?.O}.jpg&quot)`,
      }}
      className="banner-area"
    >
      <div className="banner-text-area">
        <h3>{popularFirst?.title}</h3>
        <p>{popularFirst?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
