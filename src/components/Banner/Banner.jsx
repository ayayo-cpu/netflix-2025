import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../Utils/axios";
import requests from "../../Utils/requests";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner-button play">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h3 className="banner-description">{truncate(movie?.overview, 150)}</h3>
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
  );
}

export default Banner;
