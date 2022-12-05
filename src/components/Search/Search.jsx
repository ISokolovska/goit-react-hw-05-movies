import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, FormButton, InputForm } from './Styled';

const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(() => searchParams.get('query') ?? '');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: input.trim() });
    reset();
  };

  const reset = () => {
    setInput('');
  };

  return (
    <Form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="">
        <InputForm value={input} onChange={handleChange} />
      </label>
      <FormButton type="submit">Search</FormButton>
    </Form>
  );
};

export default SearchMovie;
