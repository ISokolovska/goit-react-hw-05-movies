// import React, { useState, useEffect } from 'react';
// import Notiflix from 'notiflix';
import { Movies } from 'pages/Moviepage';
import { Routes, Route, NavLink } from 'react-router-dom';
// import { StyledNavLink } from '../Styled';
import { Home } from '../pages/Homepage';
// import { Movies } from '../pages/Moviepage';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  // const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');
  // const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (!query) return;

  //   setMovies([]);
  //   fetchMovies(query);
  //   // eslint-disable-next-line
  // }, [query]);

  // const fetchMovies = async query => {
  //   setIsLoading(true);
  //   try {
  //     const data = await getMovies(query);
  //     console.log(data);
  //     // if (data.hits.length === 0) {
  //     //   Notiflix.Notify.info('Sorry, we have not found anything !');
  //     // }
  //     setMovies(prevState => [...prevState, ...data.movie]);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     Notiflix.Notify.failure(error);
  //   }
  // };

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
