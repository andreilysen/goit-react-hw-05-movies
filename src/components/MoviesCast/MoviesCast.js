import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import { getMovieCredits } from "../../servise/apiFeanch";
import styles from "./MoviesCast.module.css";

const MoviesCast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId)
      .then(({ data }) => setCasts([...data.cast]))
      .catch((error) => console.log(`error`, error));
  }, [movieId]);
  return (
    <>
      <ul className={styles.list}>
        {casts.map((cast) => (
          <li key={cast.id} className={styles.item}>
            {
              <>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
                  alt={cast.name}
                />
                <p>{cast.name}</p>
              </>
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesCast;
