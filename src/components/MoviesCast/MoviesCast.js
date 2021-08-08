// import { useState } from "react";
import { useParams } from "react-router";

// import { getMovieCredits } from "../../servise/apiFeanch";

const MoviesCast = () => {
  const param = useParams();
  console.log(`param`, param);
  return <p>Cast</p>;
};

export default MoviesCast;
