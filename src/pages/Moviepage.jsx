import React, { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { getSearchMovies } from 'services/Api';
import SearchMovie from 'components/Search/Search';
import { Loader } from 'components/Loader/Loader';
import { Link, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movieSearch, setMovieSearch] = useState(null);
  //   const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

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
          <ul>
            {movieSearch.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    <h2>{movie.title}</h2>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {movieSearch &&
          movieSearch.length === 0 &&
          (query ? (
            <h2>Sorry, we have not found anything !</h2>
          ) : (
            <h2>Please, enter request !</h2>
          ))}
      </section>
    </>
  );
};
