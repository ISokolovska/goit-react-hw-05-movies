import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, FormButton, InputForm } from './Styled';

const SearchMovie = () => {
  const [query, setQuery] = useState('');
  const [setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query.trim() });
  };

  return (
    <Form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="">
        <InputForm value={query} onChange={handleChange} />
      </label>
      <FormButton type="submit">Search</FormButton>
    </Form>
  );
};

export default SearchMovie;
