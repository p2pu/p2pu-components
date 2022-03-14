import React from 'react'
import SearchBar from './SearchBar'
import FiltersSection from '../Filters/FiltersSection'
import SortSection from '../Filters/SortSection'

const SearchAndFilter = (props) => {
  const noResults = props.searchResults.length === 0;

  return(
    <div className="search-fields row g-0">
      <div className="bg-white shadow col-12 col-lg me-lg-2">
        <SearchBar
          placeholder={props.placeholder}
          updateQueryParams={props.updateQueryParams}
          q={props.q}
        />
      </div>
      <div className="bg-white shadow col-12 col-lg-7">
        <FiltersSection
          {...props}
        />
        {
          props.sortCollection &&
          <SortSection { ...props } />
        }
      </div>
    </div>
  )
}

export default SearchAndFilter;
