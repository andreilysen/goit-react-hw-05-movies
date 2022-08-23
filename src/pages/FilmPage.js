import { useState, useEffect } from "react";
import FilmList from "../components/FilmList";
import Button from "../components/Button";

import { getTrendingFilm } from "../service/apiFetch";

import styles from "./Pages.module.css";

const FilmPage = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    getTrendingFilm(page)
      .then(({ data }) => {
        // console.log(data);
        setFilms((prev) => [...prev, ...data.results]);
        setTotalPage(data.total_pages);
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
      {films.length > 0 && totalPage > 1 && totalPage > page && (
        <div className={styles.loadButton}>
          <Button handleClick={handleClick} />
        </div>
      )}
    </>
  );
};

export default FilmPage;
