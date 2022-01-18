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

  var handleChange = function handleChange(selected) {
    props.updateQueryParams(selected);
  };

  return /*#__PURE__*/React.createElement(SwitchWithLabels, {
    name: "oer",
    trueLabel: formValues["true"],
    falseLabel: formValues["false"],
    handleChange: handleChange,
    value: Boolean(props.oer),
    label: "What types of courses do you want to see?"
  });
};

export default OerFilterForm;