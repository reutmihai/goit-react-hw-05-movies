import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import { getTrendingMovies } from "../../services/moviesService";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trending today</h2>
      <ul className={styles["trending-list"]}>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
