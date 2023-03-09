import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
var _templateObject;
import React from 'react';
import { t } from 'ttag';
var SearchBar = function SearchBar(_ref) {
  var placeholder = _ref.placeholder,
    updateQueryParams = _ref.updateQueryParams,
    q = _ref.q;
  var onChange = function onChange(e) {
    var value = e.currentTarget.value;
    var query = value.replace(/^\s+/g, '');
    updateQueryParams({
      q: query
    });
  };
  var onSubmit = function onSubmit(e) {
    e.preventDefault();
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "search",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "search-input",
    className: "form-label"
  }, t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Search"])))), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", {
    id: "search-input",
    type: "search",
    className: "form-control search-input",
    placeholder: placeholder,
    onChange: onChange,
    value: q || '',
    "aria-label": "search terms",
    "aria-describedby": "search-icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "input-group-text",
    id: "search-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "material-icons"
  }, "search"))));
};
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map