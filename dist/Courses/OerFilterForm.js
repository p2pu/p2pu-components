import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2;

import React from 'react';
import { t } from 'ttag';
import SwitchWithLabels from '../InputFields/SwitchWithLabels';

var OerFilterForm = function OerFilterForm(props) {
  var formValues = {
    "true": t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Only open educational resources (OER)"]))),
    "false": t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["All courses"])))
  };

  var handleChange = function handleChange(event) {
    props.updateQueryParams({
      oer: event.currentTarget.checked
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    "class": "search"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "search-input",
    "class": "form-label"
  }, "OER mode"), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    name: "oer",
    type: "checkbox",
    id: "online",
    checked: Boolean(props.oer),
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    "for": "oer"
  }, "Only show open educational resources (OER)")))));
};

export default OerFilterForm;
//# sourceMappingURL=OerFilterForm.js.map