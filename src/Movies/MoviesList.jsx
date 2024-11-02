import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, query }) => {
  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title} </Link></li>
        ))}
      </ul>
    </div>
  );
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf (
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
        })
    ).isRequired,
};

export default MoviesList