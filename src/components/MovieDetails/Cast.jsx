import { useEffect, useState } from "react";
import { getMovieCredits } from "../../services/moviesService";
import { useParams } from "react-router-dom";
import styles from '../MovieDetails/Cast.module.css';

const credits = () => {
  const { movieId } = useParams();
  const [credits, setcredits] = useState(null);

  console.log(movieId);
  console.log(credits);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const data = await getMovieCredits(movieId);
      setcredits(data);
    };

    fetchMovieCredits();
  }, [movieId]);

  if (!credits) {
    return <p>Loading...</p>;
  }

  if (credits.length < 1) {
    return <p>No credits yet!</p>;
  }

  return (
    <div className="container">
      <ul className={styles['cast-container']}>
      {credits.map((credit) => (
          <li key={credit.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${credit.profile_path}`}
              alt={credit.name}
              className={styles["poster-cast"]}
            />
            <h4>{credit.name}</h4>
            <h5>Character: {credit.character}</h5>
          </li>
      ))}
      </ul>
    </div>
  );
};

export default credits;
