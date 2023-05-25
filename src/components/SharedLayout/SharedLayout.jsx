import Loading from 'components/Loading/Loading';
import React, { memo, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <>
      <Header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Header>
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default memo(SharedLayout);
