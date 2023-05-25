import React, { memo } from 'react';
import Title from 'components/Title/Title';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { getTrending } from '../services/api';
import { ListFilms } from 'components/ListFilms/ListFilms';
import Loading from 'components/Loading/Loading';

function Home() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrending()
      .then(function (response) {
        setFilms(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        Notiflix.Notify.failure(error.message);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Title text="Trending today" />
      <ListFilms films={films} />
      {loading && <Loading />}
    </div>
  );
}

export default memo(Home);
