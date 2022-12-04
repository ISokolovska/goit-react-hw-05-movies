import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getSearchMovies } from 'services/Api';

import SearchMovie from 'components/Search/Search';
import { Loader } from 'components/Loader/Loader';

import { MovieDate, MovieList, MovieTitle, NotFindTitle } from 'Styled';

export const Movies = () => {
  const [movieSearch, setMovieSearch] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchSeachMovies = async query => {
      setIsLoading(true);
      try {
        const data = await getSearchMovies(query);
        setMovieSearch(() => data.results);
      } catch (err) {
        Notiflix.Notify.failure(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSeachMovies(query);
  }, [query]);

  return (
    <>
      <SearchMovie />
      <section>
        {isLoading === true && <Loader />}
        {movieSearch && movieSearch.length > 0 && (
          <MovieList>
            {movieSearch.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    <img
                      src={
                        movie.poster_path
                          ? 'https://image.tmdb.org/t/p/w500' +
                            movie.poster_path
                          : 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
                      }
                      alt="About movie"
                      width="235"
                      height="350"
                    />
                    <MovieTitle>{movie.title}</MovieTitle>
                  </Link>
                  <MovieDate>{movie.release_date}</MovieDate>
                </li>
              );
            })}
          </MovieList>
        )}
        {movieSearch &&
          movieSearch.length === 0 &&
          (query ? (
            <NotFindTitle>Sorry, we have not found anything !</NotFindTitle>
          ) : (
            <NotFindTitle>Please, enter request !</NotFindTitle>
          ))}
      </section>
    </>
  );
};
