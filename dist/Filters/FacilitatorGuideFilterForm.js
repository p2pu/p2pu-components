import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import React from 'react';
import { t } from 'ttag';
import SwitchWithLabels from '../InputFields/SwitchWithLabels';

var FacilitatorGuideFilterForm = function FacilitatorGuideFilterForm(props) {
  var formValues = {
    "true": t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Only open educational resources (OER)"]))),
    "false": t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["All courses"])))
  };

  var handleChange = function handleChange(event) {
    props.updateQueryParams({
      facilitator_guide: event.currentTarget.checked
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    className: "search"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "search-input",
    className: "form-label"
  }, "Facilitator guides"), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    id: "facilitator_guide",
    name: "facilitator_guide",
    checked: Boolean(props.facilitator_guide),
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    "for": "facilitator_guide"
  }, "Courses with facilitator guides")))));
};

export default FacilitatorGuideFilterForm;