import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FilmList from "../components/FilmList";
import Button from "../components/Button";

import { getSearchMovie } from "../service/apiFetch";

import styles from "./Pages.module.css";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [films, setFilms] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const searchUrl = new URLSearchParams(location.search).get("query") ?? "";
  // console.log(`films`, searchUrl);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      return;
    }
    setPage(1);
    setFilms([]);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  useEffect(() => {
    if (searchUrl === "") {
      return;
    }

    getSearchMovie(searchUrl, page)
      .then(({ data }) => {
        console.log("data", data);
        setFilms((prev) => [...prev, ...data.results]);
        setTotalPage(data.total_pages);
      })
      .catch((error) => console.log(`error`, error));
  }, [searchUrl, page]);
  const handleClick = (e) => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} value={query} onChange={handleChange} />
      </form>
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

export default Movies;
