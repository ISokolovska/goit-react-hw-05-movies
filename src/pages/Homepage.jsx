import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getMovies } from 'services/Api';

import { Loader } from '../components/Loader/Loader';
import { MovieDate, MovieList, MovieTitle, Trending } from 'Styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMovies();
        setMovies(() => data.results);
      } catch (err) {
        Notiflix.Notify.failure(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section>
      {isLoading === true && <Loader />}
      <Trending>Trending today</Trending>
      {movies && movies.length > 0 && (
        <MovieList>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={
                      movie.poster_path
                        ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                        : 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
                    }
                    alt="About movie"
                    width="235"
                    height="350"
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </Link>{' '}
                <MovieDate>{movie.release_date}</MovieDate>
              </li>
            );
          })}
        </MovieList>
      )}
    </section>
  );
};
