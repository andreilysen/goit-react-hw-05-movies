import { Link, useLocation } from "react-router-dom";

import styles from "./FilmList.module.css";
import imgTemp from "../../image/imgTemp.jpg";

const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <>
      {films &&
        films.map((film) => {
          const releaseDate = film.release_date
            ? film.release_date.slice(0, 4)
            : "No date";
          const poster = film.poster_path
            ? `https://image.tmdb.org/t/p/w300/${film.poster_path}`
            : `${imgTemp}`;

          return (
            <li key={film.id} className={styles.item}>
              <Link
                className={styles.link}
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: location },
                }}
              >
                <img className={styles.image} src={poster} alt={film.title} />
                <div className={styles.textContainer}>
                  <h2 className={styles.textTitle}>{film.title}</h2>
                  <p>Release date: {releaseDate}</p>
                </div>
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default FilmList;
