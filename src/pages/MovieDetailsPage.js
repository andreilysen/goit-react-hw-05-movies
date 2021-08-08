import { Route } from "react-router";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import { useParams } from "react-router";

import { getMovieById } from "../servise/apiFeanch";
import MoviesCast from "../components/MoviesCast";
import MoviesReview from "../components/MoviesReview";
import styles from "./Pages.module.css";

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  const location = useLocation();
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId).then(({ data }) => setFilm(data));
  }, [movieId]);

  return (
    <>
      {film && (
        <>
          <div className={styles.card}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
              alt={film.title}
            />
            <div className={styles.cardText}>
              <h3>
                <span>{film.title}</span>
                <span>{film.release_date}</span>
              </h3>
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
              to={{ pathname: `${match.url}/cast`, state: { from: location } }}
            >
              Cast
            </NavLink>
            <NavLink
              className={styles.link}
              activeClassName={styles.activeLink}
              exact
              to={{
                pathname: `${match.url}/review`,
                state: { from: location },
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
