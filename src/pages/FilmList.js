import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getTrendingFilm } from "../servise/apiFeanch";

const FilmList = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    getTrendingFilm().then(({ data }) => setFilms([...data.results]));
  }, []);

  return (
    <ul>
      {films &&
        films.map((film) => (
          <li key={film.id}>
            <Link to={{ pathname: `/movies/${film.id}` }}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${film.backdrop_path}`}
                alt={film.title}
              />
              <h2>{film.title}</h2>
              <p>{film.release_date}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default FilmList;
