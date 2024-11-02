import { useEffect, useState } from "react";
import { searchMovies } from "../services/moviesService";
import MoviesList from "./MoviesList";
import { useLocation, useNavigate } from "react-router-dom";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const queryFromUrl = queryParams.get("query");

      if (queryFromUrl) {
        fetchMovies(queryFromUrl);
        setQuery(queryFromUrl);
      }
    }, [location.search]);

    const fetchMovies = async searchQuery => {
        try {
            const movies = await searchMovies(searchQuery);
            console.log(movies);
            if(movies.length === 0) {
               setMovies([]);
                return;
            }
            setMovies(movies);
        }catch(error) {
            setMovies([]);
            console.log('A aparut o eroare: ', error);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(query.trim() === '') {
            alert('Please enter a search term!');
            return;
        }
        navigate(`/movies?query=${encodeURIComponent(query)}`);
        fetchMovies(query);
        setQuery('');
    }
    

    const handleChange = (e) => {
        const {value } = e.target;
        setQuery(value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Search a movie"
            value={query}
            onChange={handleChange}/>
            <button>Search</button>
        </form>
            <MoviesList movies={movies}/>
    </div>
  )
}

export default Movies