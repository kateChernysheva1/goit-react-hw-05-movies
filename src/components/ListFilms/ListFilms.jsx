import { Link, useLocation } from 'react-router-dom';
import { List } from './ListFilms.styled';
import PropTypes from 'prop-types';

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

ListFilms.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
