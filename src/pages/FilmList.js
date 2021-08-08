import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getTrendingFilm } from "../servise/apiFeanch";

import styles from "./Pages.module.css";

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getTrendingFilm(page).then(({ data }) =>
      setFilms((prev) => [...prev, ...data.results])
    );
  }, [page]);

  const handleClick = (e) => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <ul className={styles.list}>
        {films &&
          films.map((film) => (
            <li key={film.id} className={styles.item}>
              <Link to={{ pathname: `/movies/${film.id}` }}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                  alt={film.title}
                />
                <h2 className={styles.textTitle}>{film.title}</h2>
                <p>{film.release_date}</p>
              </Link>
            </li>
          ))}
      </ul>
      <div className={styles.loadButton}>
        <button className={styles.button} onClick={handleClick}>
          Load more
        </button>
      </div>
    </>
  );
};

export default FilmList;
