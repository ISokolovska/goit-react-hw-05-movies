import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { getMovies } from 'services/Api';
import { Link } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMovies();
        setMovies(() => data.results);
        console.log(data.results);
        // if (results.length === 0) {
        //   Notiflix.Notify.info('Sorry, we have not found anything !');
        // }
        // setMovies(prevState => [...prevState, ...data.results]);
      } catch (err) {
        setError(err.message);
        Notiflix.Notify.failure(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {isLoading === true && <Loader />}
      <h1>Trending today</h1>
      {movies.length > 0 && (
        <ul movies={movies}>
          {movies.map(movie => {
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
    </section>
  );
};
