import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3;
import React, { Component } from 'react';
import { t } from 'ttag';
import { OPEN_TAB_TEXT, CLOSED_TAB_TEXT } from '../utils/constants';
var DefaultNoResults = function DefaultNoResults(props) {
  var renderLinks = function renderLinks() {
    var links = [];
    if (props.updateResultsTab) {
      var otherTab = props.tabIndex === 0 ? 1 : 0;
      var otherTabName = otherTab === 0 ? OPEN_TAB_TEXT : CLOSED_TAB_TEXT;
      links.push( /*#__PURE__*/React.createElement("button", {
        key: "reset-btn",
        className: "btn p2pu-btn btn-sm dark d-inline-flex align-items-center py-2 px-3",
        onClick: function onClick() {
          return props.updateResultsTab(otherTab);
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "material-icons mr-1"
      }, "arrow_forward"), t(_templateObject || (_templateObject = _taggedTemplateLiteral(["View ", " learning circles"])), otherTabName)));
    }
    if (props.contact) {
      links.push( /*#__PURE__*/React.createElement("a", {
        key: "contact-btn",
        href: "mailto:".concat(props.contact),
        className: "btn p2pu-btn btn-sm dark d-inline-flex align-items-center py-2 px-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: "material-icons mr-1"
      }, "alternate_email"), t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Contact this team"])))));
    }
    return links;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "my-4"
  }, /*#__PURE__*/React.createElement("p", null, t(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["There are no learning circles available right now."])))), renderLinks());
};
export default DefaultNoResults;
//# sourceMappingURL=DefaultNoResults.js.map