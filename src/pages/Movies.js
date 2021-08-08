import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSearchMovie } from "../servise/apiFeanch";

import styles from "./Pages.module.css";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      return;
    }
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    getSearchMovie(searchQuery, page).then(({ data }) =>
      setFilms((prev) => [...prev, ...data.results])
    );
  }, [searchQuery, page]);

  const handleClick = (e) => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} value={query} onChange={handleChange} />
      </form>
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

export default Movies;
