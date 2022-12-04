import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getMovieDetails } from 'services/Api';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async movieId => {
      setIsLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(() => data);
      } catch (err) {
        Notiflix.Notify.failure(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading === true && <Loader />}
      <button>Go back</button>
      {movieDetails && (
        <div>
          <img
            src={
              movieDetails.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path
                : 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
            }
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
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={'cast'}>
              <p>Cast</p>
            </Link>
          </li>
          <li>
            <Link to={'reviews'}>
              <p>Reviews</p>
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
