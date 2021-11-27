import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import PropTypes from "prop-types";

import { getMoviesReview } from "../../service/apiFetch";

const MoviesReview = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMoviesReview(movieId)
      .then(({ data }) => setReviews([...data.results]))
      .catch((error) => console.log(`error`, error));
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

// MoviesReview.propTypes = {
//   movieId: PropTypes.number,
// };

export default MoviesReview;
