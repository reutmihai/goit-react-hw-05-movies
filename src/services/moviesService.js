import axios from "axios";

const API_KEY = "c1d5ee482c38701c8da0ad1eb01e00b3";
axios.defaults.baseURL = "https://api.themoviedb.org/3"; 

export async function searchMovies(query) {
  try {
    const response = await axios.get("/search/movie", {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results || []; 
  } catch (error) {
    console.error("Error searching for movies:", error);
    return null; 
  }
}

export async function getTrendingMovies() {
  try {
    const response = await axios.get("/trending/movie/day", {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results || []; 
  } catch (error) {
    console.error("Error getting trending movies: ", error);
    return null;
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: { api_key: API_KEY },
    });
    return response.data || null; 
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null; 
  }
}

export async function getMovieCredits(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, {
      params: { api_key: API_KEY },
    });
    return response.data.cast || []; 
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    return null; 
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
      params: { api_key: API_KEY },
    });
    return response.data.results || []; 
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    return null; 
  }
}
