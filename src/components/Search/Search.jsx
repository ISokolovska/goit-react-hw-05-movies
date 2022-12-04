import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchMovie = () => {
  const [query, setQuery] = useState(''); // query for handleChange
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query.trim() });
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="">
        <input value={query} onChange={handleChange} />
      </label>
      <button type="submit"></button>
    </form>
  );
};

export default SearchMovie;
