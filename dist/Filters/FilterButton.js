import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

import React from 'react';
import { t } from 'ttag';

var Filter = function Filter(_ref) {
  var filter = _ref.filter,
      active = _ref.active,
      updateActiveFilter = _ref.updateActiveFilter,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? null : _ref$label;
  var filterNames = {
    'location': t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Location"]))),
    'language': t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Language"]))),
    'topics': t(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Topics"]))),
    'meetingDays': t(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Meeting Day(s)"]))),
    'orderCourses': t(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Sort by"]))),
    'oer': t(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["OER mode"])))
  };
  var iconName = active ? 'remove' : 'add';
  var activeClass = active ? 'active' : '';

  var handleClick = function handleClick() {
    var newValue = active ? '' : filter;
    updateActiveFilter(newValue);
  };

  var filterLabel = label || filterNames[filter];
  return /*#__PURE__*/React.createElement("div", {
    className: "filter ".concat(activeClass)
  }, /*#__PURE__*/React.createElement("button", {
    className: "p2pu-btn light with-outline",
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexWrap: 'nowrap',
      whiteSpace: 'nowrap'
    }
  }, filterLabel)));
};

export default Filter;