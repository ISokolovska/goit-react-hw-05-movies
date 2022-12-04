import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { getMovies } from 'services/Api';
import { Link } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMovies();
        setMovies(() => data.results);

        // if (results.length === 0) {
        //   Notiflix.Notify.info('Sorry, we have not found anything !');
        // }
        // setMovies(prevState => [...prevState, ...data.results]);
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
      <h1>Trending today</h1>
      {movies && movies.length > 0 && (
        <ul>
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
