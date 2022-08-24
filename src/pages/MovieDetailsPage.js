import { Route } from "react-router";
import {
  NavLink,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { getMovieById } from "../service/apiFetch";
import MoviesCast from "../components/MoviesCast";
import MoviesReview from "../components/MoviesReview";
import Button from "../components/Button";

import imgTemp from "../image/imgTemp500.jpg";
import styles from "./Pages.module.css";

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId)
      .then(({ data }) => setFilm(data))
      .catch((error) => console.log(`error`, error));
  }, [location, movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };
  const releaseDate = film?.release_date ? film.release_date : "No date";
  const poster = film?.poster_path
    ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
    : `${imgTemp}`;

  return (
    <>
      {film && (
        <>
          <button onClick={onGoBack} className={styles.button}>
            Go back
          </button>
          <div className={styles.card}>
            <img src={poster} alt={film.title} />
            <div className={styles.cardText}>
              <h2>{film.title} </h2>
              <h4>
                Release date:{" "}
                <span className={styles.release}>{releaseDate}</span>
              </h4>
              <h3>Overview</h3>
              <p>{film.overview}</p>
              <h3>Genres:</h3>
              <ul>
                {film.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className={styles.navLink}>
            <NavLink
              className={styles.link}
              activeClassName={styles.activeLink}
              exact
              to={{
                pathname: `${match.url}/cast`,
                state: { ...location.state },
              }}
            >
              Cast
            </NavLink>
            <NavLink
              className={styles.link}
              activeClassName={styles.activeLink}
              exact
              to={{
                pathname: `${match.url}/review`,
                state: { ...location.state },
              }}
            >
              Review
            </NavLink>
          </div>

          <Route path={`${match.path}/cast`}>
            <MoviesCast />
          </Route>
          <Route path={`${match.path}/review`}>
            <MoviesReview />
          </Route>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
