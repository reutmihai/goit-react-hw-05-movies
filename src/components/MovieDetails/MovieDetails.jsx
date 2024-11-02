import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/moviesService";
import styles from "../MovieDetails/MovieDetails.module.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
   const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

    const queryParams = new URLSearchParams(location.search);
    const queryString = queryParams.get("query");


  return (
    <div className={styles.container}>
      <Link to={`/movies?query=${queryString}`}>Back</Link>
      <div className={styles["movieDetails-container"]}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
          className={styles.poster}
        />
        <div className={styles["movie-info"]}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles.score}>
            <span>User Score:</span> {Math.round(movie.vote_average * 10)}%
          </p>
          <p className={styles.overview}>
            <span> Overview: </span>
            {movie.overview}
          </p>
          <p className={styles.genres}>
            <span> Genres: </span>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>

      <div className={styles["additional-info"]}>
        <h3>Additional Information</h3>
        <ul className={styles.links}>
          <li>
            <Link to="cast" className={styles.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={styles.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
