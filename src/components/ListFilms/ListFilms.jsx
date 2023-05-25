import { Link, useLocation } from 'react-router-dom';
import { List } from './ListFilms.styled';

export function ListFilms({ films }) {
  const location = useLocation();

  return (
    <List>
      {films.map(({ title, id, name }) => {
        return (
          <li key={id}>
            <Link
              to={location.pathname === '/' ? `movies/${id}` : `${id}`}
              state={{ from: location }}
            >
              {title ?? name}
            </Link>
          </li>
        );
      })}
    </List>
  );
}
