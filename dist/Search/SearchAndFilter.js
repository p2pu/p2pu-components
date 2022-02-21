import React from 'react';
import SearchBar from './SearchBar';
import FiltersSection from '../Filters/FiltersSection';
import SortSection from '../Filters/SortSection';

var SearchAndFilter = function SearchAndFilter(props) {
  var noResults = props.searchResults.length === 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "search-fields row g-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white shadow col-12 col-lg me-lg-2"
  }, /*#__PURE__*/React.createElement(SearchBar, {
    placeholder: props.placeholder,
    updateQueryParams: props.updateQueryParams,
    q: props.q
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-white shadow col-12 col-lg-7"
  }, /*#__PURE__*/React.createElement(FiltersSection, props), props.sortCollection && /*#__PURE__*/React.createElement(SortSection, props)));
};

export default SearchAndFilter;
//# sourceMappingURL=SearchAndFilter.js.map