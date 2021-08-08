import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSearchMovie } from "../servise/apiFeanch";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [films, setFilms] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      return;
    }
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    getSearchMovie(searchQuery).then(({ data }) => setFilms([...data.results]));
  }, [searchQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={handleChange} />
      </form>
      <ul>
        {films &&
          films.map((film) => (
            <li key={film.id}>
              <Link to={{ pathname: `/movies/${film.id}` }}>{film.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Movies;
