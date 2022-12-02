import axios from 'axios';
const API_KEY = '52034845be946f0ec5084ce7d11f96f3';

export const getMovies = async () => {
  const config = {
    params: {
      api_key: API_KEY,
      // page: page,
    },
  };
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    config
  );
  return data;
};

export const getSearchMovies = async () => {
  const config = {
    params: {
      api_key: API_KEY,
      // page: page,
    },
  };
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    config
  );
  return data;
};

export const getMovieDetails = async (movieId = '') => {
  const config = {
    params: {
      api_key: API_KEY,
      // page: page,
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    config
  );
  return data;
};

export const getMovieCredits = async (movieId = '') => {
  const config = {
    params: {
      api_key: API_KEY,
      // page: page,
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    config
  );
  return data;
};

export const getMovieReviews = async (movieId = '') => {
  const config = {
    params: {
      api_key: API_KEY,
      // page: page,
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    config
  );
  return data;
};
