import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //   make request to API and render information in to the DOM, feed the information.
  useEffect(() => {
    //if [], run once when the row loads and don't run again. empty [] means only run once.
    //In UseEffect async function, rember that you should update the [] after every axios get function,
    // or it will get different answer with you expected and it will run into an issue.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* {row__posters} */}

        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* {container -> posters} */}
    </div>
  );
}

export default Row;
