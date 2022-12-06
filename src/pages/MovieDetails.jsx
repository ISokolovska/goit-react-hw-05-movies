import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getMovieDetails } from 'services/Api';
import { Loader } from 'components/Loader/Loader';
import {
  Additional,
  AdditionalItem,
  DetailsText,
  ImageGoBack,
  LinkGoBack,
  MovieInfo,
  MoviePicture,
} from 'Styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
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
      <LinkGoBack to={backLinkHref}>
        <ImageGoBack
          src="https://img.icons8.com/ios-glyphs/30/null/chevron-left.png"
          alt="arrow"
          width="15"
          height="15"
        />
        Go back
      </LinkGoBack>
      {movieDetails && (
        <MovieInfo>
          <MoviePicture
            src={
              movieDetails.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path
                : 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
            }
            alt="About movie"
          />

          <div>
            <h1>{movieDetails.title}</h1>
            <DetailsText>
              User score: {Math.ceil(movieDetails.vote_average * 10)}%
            </DetailsText>
            <h2>Overview</h2>
            <DetailsText>{movieDetails.overview}</DetailsText>
            <h3>Genres</h3>
            <DetailsText>
              {movieDetails.genres.map(genre => genre.name).join(', ')}
            </DetailsText>
          </div>
        </MovieInfo>
      )}
      <div>
        <Additional>Additional information</Additional>
        <ul>
          <AdditionalItem>
            <Link to={'cast'} state={{ from: location.state?.from }}>
              <p>Cast</p>
            </Link>
          </AdditionalItem>
          <AdditionalItem>
            <Link to={'reviews'} state={{ from: location.state?.from }}>
              <p>Reviews</p>
            </Link>
          </AdditionalItem>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
