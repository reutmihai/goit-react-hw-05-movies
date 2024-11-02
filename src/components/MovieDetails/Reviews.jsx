import { useEffect, useState } from "react";
import { getMovieReviews } from "../../services/moviesService";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    };

    fetchMovieReviews();
  }, [movieId]);

  if (!reviews) {
    return <p>Loading...</p>;
  }

  if(reviews.length < 1) {
    return <p>No reviews yet!</p>
  }

  return (
    <div>
      {reviews.map((review) => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </div>
  );
};

export default Reviews;
