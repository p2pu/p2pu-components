import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

import React, { Component } from 'react';
import { t, jt, ngettext, msgid } from 'ttag';

var SearchSummary = function SearchSummary(props) {
  var reloadWindow = function reloadWindow() {
    if (typeof window !== "undefined") {
      window.history.replaceState({}, document.title, window.location.pathname);
      window.location.reload();
    }
  };

  var noResults = props.searchResults.length === 0;
  var resetButton = /*#__PURE__*/React.createElement("button", {
    key: "reset-search",
    onClick: reloadWindow,
    className: "p2pu-btn light with-outline"
  }, t(_templateObject || (_templateObject = _taggedTemplateLiteral(["reset the search form"]))));
  return /*#__PURE__*/React.createElement("div", {
    className: "results-summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-tags wrapper"
  }, /*#__PURE__*/React.createElement("span", {
    key: "resultsSummary-0"
  }, ngettext(msgid(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Showing ", " of ", " result"])), props.searchResults.length, props.totalResults), "Showing ".concat(props.searchResults.length, " of ").concat(props.totalResults, " results"), props.totalResults))), noResults && /*#__PURE__*/React.createElement("div", {
    className: "clear-search"
  }, jt(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["To see more results, either remove some filters or ", ""])), resetButton)));
};

export default SearchSummary;
//# sourceMappingURL=SearchSummary.js.map