import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import React from 'react';
import { t } from 'ttag';
import { COURSES_SORT_OPTIONS } from '../utils/constants';
import Select from '../InputFields/Select';

var OrderCoursesForm = function OrderCoursesForm(props) {
  var handleChange = function handleChange(_ref) {
    var order = _ref.order;
    props.updateQueryParams({
      order: order
    });
  };

  return /*#__PURE__*/React.createElement("form", {
    className: "filter"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "order-input",
    className: "form-label"
  }, t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Order By"])))), /*#__PURE__*/React.createElement(Select, {
    name: "order",
    "aria-label": "Default select example",
    placeholder: "Order by popularity, rating, etc.",
    options: COURSES_SORT_OPTIONS,
    value: props.order || COURSES_SORT_OPTIONS[0].value,
    handleChange: handleChange
  }));
};

export default OrderCoursesForm;
//# sourceMappingURL=OrderCoursesForm.js.map