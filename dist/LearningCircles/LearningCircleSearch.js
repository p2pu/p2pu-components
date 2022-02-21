import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import SearchBar from "../Search/SearchBar";
import SearchTags from "../Search/SearchTags";
import LearningCircleFilters from "./Filters";
import BrowseLearningCircles from "./Browse";
import DefaultNoResults from "../Search/DefaultNoResults";

var LearningCircleSearch = function LearningCircleSearch(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "search-fields row g-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white shadow col-12 col-lg me-lg-2"
  }, /*#__PURE__*/React.createElement(SearchBar, props)), /*#__PURE__*/React.createElement("div", {
    className: "bg-white shadow col-12 col-lg-7"
  }, /*#__PURE__*/React.createElement(LearningCircleFilters, props))), /*#__PURE__*/React.createElement(SearchTags, props), /*#__PURE__*/React.createElement(BrowseLearningCircles, _extends({}, props, {
    NoResultsComponent: DefaultNoResults
  })));
};

export default LearningCircleSearch;
//# sourceMappingURL=LearningCircleSearch.js.map