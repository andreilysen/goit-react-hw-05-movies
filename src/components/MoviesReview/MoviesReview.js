import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getMoviesReview } from "../../servise/apiFeanch";

const MoviesReview = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMoviesReview(movieId).then(({ data }) => setReviews([...data.results]));
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.author}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};

export default MoviesReview;
