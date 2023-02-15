import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import React from 'react';
import { t } from 'ttag';
var FacilitatorGuideFilterForm = function FacilitatorGuideFilterForm(props) {
  var handleChange = function handleChange(event) {
    props.updateQueryParams({
      facilitator_guide: event.currentTarget.checked
    });
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "filter"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "facilitator_guide",
    className: "form-label"
  }, t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Facilitator guides"])))), /*#__PURE__*/React.createElement("div", {
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
    htmlFor: "facilitator_guide"
  }, t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Only show courses with facilitator guides"])))))));
};
export default FacilitatorGuideFilterForm;
//# sourceMappingURL=FacilitatorGuideFilterForm.js.map