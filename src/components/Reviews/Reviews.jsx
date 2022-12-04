import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { getMovieReviews } from 'services/Api';
import { Loader } from 'components/Loader/Loader';
import { NoReviews, ReviewsContent, ReviewsInfo } from './Styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async movieId => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
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
    <ReviewsInfo>
      {isLoading === true && <Loader />}
      <h2>Reviews</h2>
      {reviews && reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map(result => (
            <li key={result.id}>
              <h3>{result.author}</h3>
              <ReviewsContent>{result.content}</ReviewsContent>
            </li>
          ))}
        </ul>
      ) : (
        <NoReviews>We don't have any reviews for this movie</NoReviews>
      )}
    </ReviewsInfo>
  );
};

export default Reviews;
