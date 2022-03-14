import React from 'react';
import { t } from 'ttag';
import SwitchWithLabels from '../InputFields/SwitchWithLabels';

var OerFilterForm = function OerFilterForm(props) {
  var handleChange = function handleChange(event) {
    props.updateQueryParams({
      oer: event.currentTarget.checked
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    className: "search"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "search-input",
    className: "form-label"
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
    htmlFor: "oer"
  }, "Only show open educational resources (OER)")))));
};

export default OerFilterForm;
//# sourceMappingURL=OerFilterForm.js.map