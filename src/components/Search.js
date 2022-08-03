import '../styles/layout/search.css';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
/* eslint-disable jsx-a11y/control-has-associated-label */

function Search() {
  const [searchParams] = useSearchParams();
  const [param, setParam] = useState(searchParams.get('search') ?? '');

  const onChangeInput = (event) => {
    event.preventDefault();
    setParam(event.target.value);
  };

  return (
    <div className="input-container">
      <form className="form-sarch" action="/items">
        <input
          className="input-search"
          name="search"
          type="text"
          placeholder="Nunca dejes de buscar"
          onChange={onChangeInput}
          value={param}
        />
        <button className="search-icon" type="submit" />
      </form>
    </div>
  );
}

export default Search;
