import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getSearchMovie } from "../servise/apiFeanch";

import styles from "./Pages.module.css";

const Movies = () => {
  const [query, setQuery] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  // const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const searchUrl = new URLSearchParams(location.search).get("query") ?? "";
  // console.log(`films`, films);
  // console.log(`searchQuery`, searchQuery);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (query === "") {
    //   return;
    // }
    // setSearchQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
    // console.log(`location`, location);
  };

  useEffect(() => {
    if (searchUrl === "") {
      return;
    }

    getSearchMovie(searchUrl)
      .then(({ data }) => setFilms([...data.results]))
      .catch((error) => console.log(`error`, error));
  }, [searchUrl]);

  // useEffect(() => {
  //   if (searchUrl === "") {
  //     return;
  //   }

  //   setSearchQuery(searchUrl);
  // }, [searchUrl]);

  // const handleClick = (e) => {
  //   setPage((prev) => prev + 1);
  // };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} value={query} onChange={handleChange} />
      </form>

      {films && (
        <ul className={styles.list}>
          {films.map((film) => (
            <li key={film.id} className={styles.item}>
              <Link
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: location },
                }}
              >
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
      )}
      {films.length > 0 && (
        <div className={styles.loadButton}>
          {/* <button className={styles.button} onClick={handleClick}>
            Load more
          </button> */}
        </div>
      )}
    </>
  );
};

export default Movies;
