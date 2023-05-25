import Notiflix from 'notiflix';
import React, { memo, useEffect, useState } from 'react';
import { getMovieCredits } from 'services/api';
import { useParams } from 'react-router-dom';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const standartImage =
    'https://kartinki.pibig.info/uploads/posts/2023-04/1681549765_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-1.jpg';

  useEffect(() => {
    getMovieCredits(movieId)
      .then(function (response) {
        if (!response.data.cast[0]) setNotFound(true);
        setCast(response.data.cast);
      })
      .catch(function () {
        Notiflix.Notify.failure('Happened ERROR, TRY AGAIN IN SOME TIME');
        setNotFound(true);
      });
  }, [movieId]);

  return (
    <>
      {cast[0] && (
        <ul>
          {cast.map(elem => {
            return (
              <li key={elem.id}>
                <img
                  style={{ width: 200 }}
                  src={
                    elem.profile_path
                      ? `https://image.tmdb.org/t/p/w200${elem.profile_path}`
                      : standartImage
                  }
                  alt={elem.name}
                />
                <p>{elem.name}</p>
                <p>{elem.character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {notFound && <p>Cast not found!</p>}
    </>
  );
}

export default memo(Cast);
