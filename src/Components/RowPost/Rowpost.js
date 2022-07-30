import React, {useEffect, useState} from "react";
import "../RowPost/Rowpost.css";
import axios from "axios";
import {API_KEY, imageUrl} from "../../constants/Constants";
import Youtube from "react-youtube";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) => {
        console.log(Response.data.results);
        setMovies(Response.data.results);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const handleMovies = (id) => {
    console.log(id);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.result.length !== 0) {
          setUrlId(response.data.results[3]);
        } else {
          console.log("Array Empty");
        }
      });
  };

  const opts = {
    height: "390",
    width: "100%",
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie, id) => {
          return (
            <img
              onClick={() => {
                handleMovies(movie.id);
              }}
              src={`${imageUrl + movie.backdrop_path}`}
              className={props.isSmall ? "smallPoster" : "poster"}
              alt="posters"
              key={id}
            />
          );
        })}
      </div>

      {/* { urlId ? <Youtube videoId={urlId} opts={opts}></Youtube>:""}   */}
    </div>
  );
}

export default Rowpost;
