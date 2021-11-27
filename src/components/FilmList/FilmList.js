import { Link, useLocation } from "react-router-dom";

import styles from "./FilmList.module.css";

const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <>
      {films &&
        films.map((film) => {
          const releaseDate = film.release_date.slice(0, 4);
          return (
            <li key={film.id} className={styles.item}>
              <Link
                className={styles.link}
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: location },
                }}
              >
                <img
                  className={styles.image}
                  src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                  alt={film.title}
                />
                <div className={styles.textContainer}>
                  <h2 className={styles.textTitle}>{film.title}</h2>
                  <p>Release: {releaseDate}</p>
                </div>
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default FilmList;
