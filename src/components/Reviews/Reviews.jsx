import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getMovieReviews } from 'services/Api';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async movieId => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        console.log(data);
        setReviews(() => data);
      } catch (err) {
        Notiflix.Notify.failure(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading === true && <Loader />}
      <h2>Reviews</h2>
      {reviews && reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map(result => (
            <li key={result.id}>
              <h3>{result.author}</h3>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
