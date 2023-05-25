import React, { memo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getMovie } from 'services/api';
import { ListFilms } from 'components/ListFilms/ListFilms';
import Loading from 'components/Loading/Loading';
import { Form } from './styles/Movie.styled';

function Movies() {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  let query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getMovie(query)
      .then(function (response) {
        console.log(response.data.results);
        if (!response.data.results[0]) setNotFound(true);
        else setNotFound(false);
        setMovie(response.data.results);
      })
      .catch(function () {
        Notiflix.Notify.failure('Happened ERROR, TRY AGAIN IN SOME TIME');
      })
      .finally(function () {
        setLoading(false);
      });
  }, [query]);

  function inputFunc(ev) {
    ev.preventDefault();
    let value = ev.target.elements.input.value.trim();
    if (!value) {
      return Notiflix.Notify.failure('Поле не может быть пустым');
    }
    setSearchParams({ query: value });
    ev.target.reset();
  }

  return (
    <>
      <Form onSubmit={inputFunc}>
        <input type="text" name="input" />
        <button type="submit">Search</button>
      </Form>

      {!loading && <ListFilms films={movie} />}
      {notFound && <p>Film not found!</p>}
      {loading && <Loading />}
    </>
  );
}

export default memo(Movies);
