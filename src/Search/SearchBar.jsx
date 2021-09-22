import React from 'react';
import {t} from 'ttag';

const SearchBar = ({ placeholder, updateQueryParams, q }) => {
  const onChange = (e) => {
    const value = e.currentTarget.value
    const query = value.replace(/^\s+/g, '');
    updateQueryParams({ q: query });
  }

  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <form className="search" onSubmit={onSubmit}>
      <label htmlFor="search-input" className="form-label">{t`Search`}</label>
      <div className="input-group">
        <input 
          id="search-input"
          type="search"
          className="form-control search-input"
          placeholder={placeholder}
          onChange={onChange}
          value={q||''}
          aria-label="search terms"
          aria-describedby="search-icon"/>
        <span className="input-group-text" id="search-icon"><i className="material-icons">search</i></span>
      </div>
    </form>
  )
}

export default SearchBar;
