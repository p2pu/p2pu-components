import _extends from "@babel/runtime/helpers/extends";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import React, { useState } from 'react';
import { t } from 'ttag';
import SearchBar from "../Search/SearchBar";
import SearchTags from "../Search/SearchTags";
import LocationFilter from './LocationFilter';
import BrowseLearningCircles from "./Browse";
import DefaultNoResults from "../Search/DefaultNoResults";

var LearningCircleSearch = function LearningCircleSearch(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "search-fields row g-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white shadow col-12 col-lg me-lg-2"
  }, /*#__PURE__*/React.createElement(SearchBar, _extends({
    placeholder: t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Keyword, organization, facilitator, etc..."])))
  }, props))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white shadow col-12 col-lg-7"
  }, /*#__PURE__*/React.createElement(LocationFilter, props))), /*#__PURE__*/React.createElement(SearchTags, props), /*#__PURE__*/React.createElement(BrowseLearningCircles, _extends({}, props, {
    NoResultsComponent: DefaultNoResults
  })));
};

export default LearningCircleSearch;
//# sourceMappingURL=LearningCircleSearch.js.map