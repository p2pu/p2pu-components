import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import React from 'react';
import { t } from 'ttag';
import SwitchWithLabels from '../InputFields/SwitchWithLabels';
import { COURSES_SORT_OPTIONS } from '../utils/constants';

var OrderCoursesForm = function OrderCoursesForm(props) {
  var handleChange = function handleChange(event) {
    var order = event.target.value;
    props.updateQueryParams({
      order: order
    });
    props.closeFilter();
  };

  return /*#__PURE__*/React.createElement("form", {
    className: "filter"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "order-input",
    className: "form-label"
  }, t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Order By"])))), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-select form-control",
    "aria-label": "Default select example",
    placeholder: "Order by popularity, rating, etc.",
    onChange: handleChange,
    value: props.order
  }, COURSES_SORT_OPTIONS.map(function (option) {
    return /*#__PURE__*/React.createElement("option", {
      value: option.value
    }, option.label);
  }))));
};

export default OrderCoursesForm;