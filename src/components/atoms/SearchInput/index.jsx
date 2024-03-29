import React, { useState } from 'react';
import './styles.scss';

const SearchInput = ({ placeholder, onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(searchValue);
  };

  const changeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="search">
      <button className="search__button">
        <svg className="search__icon">
          <use href="#search" xlink-href="#search" />
        </svg>
      </button>
      <input
        onChange={changeHandler}
        className="search__input"
        aria-label="search input"
        type="text"
        placeholder={placeholder}
        value={searchValue}
      />
    </form>
  );
};

export default SearchInput;
