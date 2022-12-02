import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { useParams } from 'react-router-dom';
import {
  //   getMovieCredits,
  getMovieDetails,
  //   getMovieReviews,
} from 'services/Api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  //   const [movieCredits, setMovieCredits] = useState(null);
  //   const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async movieId => {
      // setIsLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        // const movieCredits = await getMovieCredits(movieId);
        // const movieReviews = await getMovieReviews(movieId);
        console.log(data);

        setMovieDetails(() => data);

        // setMovieCredits(movieCredits);
        // setMovieReviews(movieReviews);
        // console.log(data.results);
        // if (results.length === 0) {
        //   Notiflix.Notify.info('Sorry, we have not found anything !');
        // }
        // setMovies(prevState => [...prevState, ...data.results]);
      } catch (err) {
        setError(err.message);
        Notiflix.Notify.failure(error);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchMovieDetails(movieId);
    // eslint-disable-next-line
  }, [movieId]);

  //   useEffect(() => {
  //     console.log(movieCredits);
  //     console.log(movieReviews);
  //   }, [movieCredits, movieReviews]);

  return (
    <div>
      <button>Go back</button>
      {movieDetails && (
        <div>
          <img
            src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path}
            alt="About movie"
          />
          <h1>{movieDetails.title}</h1>
          <p>User score: {Math.ceil(movieDetails.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
};
