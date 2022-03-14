import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var _excluded = ["label", "name", "id", "value", "handleChange", "required", "disabled", "classes", "type", "errorMessage", "helpText", "placeholder", "autoFormat", "defaultCountry", "flagsImagePath", "onlyCountries", "preferredCountries"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactTelInput from 'react-telephone-input';
import 'react-telephone-input/css/default.css';
import './mobile-input.css';
import InputWrapper from '../InputWrapper';

var MobileInput = function MobileInput(props) {
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      browserError = _useState2[0],
      setBrowserError = _useState2[1];

  var label = props.label,
      name = props.name,
      id = props.id,
      value = props.value,
      handleChange = props.handleChange,
      required = props.required,
      disabled = props.disabled,
      classes = props.classes,
      type = props.type,
      errorMessage = props.errorMessage,
      helpText = props.helpText,
      placeholder = props.placeholder,
      autoFormat = props.autoFormat,
      defaultCountry = props.defaultCountry,
      flagsImagePath = props.flagsImagePath,
      onlyCountries = props.onlyCountries,
      preferredCountries = props.preferredCountries,
      rest = _objectWithoutProperties(props, _excluded);

  var inputEl = useRef();

  var onChange = function onChange(phone, country) {
    setBrowserError(null);
    handleChange(_defineProperty({}, name, phone));
  };

  var checkValidity = function checkValidity() {
    var validationMessage = inputEl.current.validationMessage;
    setBrowserError(validationMessage);
  };

  var combinedErrorMessage = [browserError, errorMessage].filter(Boolean).join("; ");
  return /*#__PURE__*/React.createElement(InputWrapper, {
    label: label,
    name: name,
    id: id,
    required: required,
    disabled: disabled,
    errorMessage: combinedErrorMessage,
    helpText: helpText,
    classes: classes
  }, /*#__PURE__*/React.createElement(ReactTelInput, {
    ref: inputEl,
    placeholder: placeholder,
    flagsImagePath: flagsImagePath,
    value: value,
    onChange: onChange,
    onBlur: checkValidity,
    defaultCountry: defaultCountry,
    disabled: disabled,
    autoFormat: autoFormat,
    onlyCountries: onlyCountries,
    preferredCountries: preferredCountries,
    inputProps: _objectSpread({
      name: name,
      id: name,
      required: required
    }, rest)
  }));
};

MobileInput.defaultProps = {
  type: 'text',
  value: "",
  required: false,
  disabled: false,
  label: 'Text input',
  classes: '',
  handleChange: function handleChange(input) {
    return console.log("Implement a function to save input", input);
  },
  defaultCountry: 'us',
  autoFormat: true,
  placeholder: '',
  flagsImagePath: "https://learningcircles.p2pu.org/static/images/flags.png"
};
MobileInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  classes: PropTypes.string,
  placeholder: PropTypes.string
};
export default MobileInput;
//# sourceMappingURL=MobileInput.js.map