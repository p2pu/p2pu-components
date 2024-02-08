import React from 'react';
import { t } from 'ttag';
import SwitchWithLabels from '../InputFields/SwitchWithLabels';
var OerFilterForm = function OerFilterForm(props) {
  var handleChange = function handleChange(event) {
    props.updateQueryParams({
      oer: event.currentTarget.checked
    });
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "filter"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "oer-input",
    className: "form-label"
  }, "OER mode"), /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    id: "oer-input",
    name: "oer",
    type: "checkbox",
    checked: Boolean(props.oer),
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "oer-input"
  }, "Only show open educational resources (OER)"))));
};
export default OerFilterForm;
//# sourceMappingURL=OerFilterForm.js.map