import { useState, useEffect } from "react";

import { getTrendingFilm } from "../service/apiFetch";
import FilmList from "../components/FilmList";

import styles from "./Pages.module.css";

const FilmPage = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getTrendingFilm(page)
      .then(({ data }) => {
        console.log(data);
        setFilms((prev) => [...prev, ...data.results]);
      })
      .catch((error) => console.log(`error`, error));
  }, [page]);

  const handleClick = (e) => {
    setPage((prev) => prev + 1);
  };

  console.log(films);

  return (
    <>
      <ul className={styles.list}>
        <FilmList films={films} />
      </ul>
      <div className={styles.loadButton}>
        <button className={styles.button} onClick={handleClick}>
          Load more
        </button>
      </div>
    </>
  );
};

export default FilmPage;
