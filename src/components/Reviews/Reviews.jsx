import React, { memo, useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(function (response) {
        if (!response.data.results[0]) setNotFound(true);
        setReviews(response.data.results);
      })
      .catch(function () {
        Notiflix.Notify.failure('Happened ERROR, TRY AGAIN IN SOME TIME');
        setNotFound(true);
      });
  }, [movieId]);
  return (
    <>
      {reviews[0] && (
        <ul>
          {reviews.map(elem => {
            return (
              <li key={elem.id}>
                <h3>Author: {elem.author}</h3>
                <p>{elem.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {notFound && <p>Reviews not found!</p>}
    </>
  );
}

export default memo(Reviews);
