import { Route } from "react-router";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import { useParams } from "react-router";

import { getMovieById } from "../servise/apiFeanch";
import MoviesCast from "../components/MoviesCast/MoviesCast";

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
          <h3>Its details films {film.title} </h3>
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt={film.title}
          />
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
          <h3>Additional information</h3>
          <NavLink
            exact
            to={{ pathname: `${match.url}/cast`, state: { from: location } }}
          >
            Cast
          </NavLink>
          <Route path={`${match.patch}`}>
            <MoviesCast />
          </Route>
          {/* <p>Review</p> */}
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
