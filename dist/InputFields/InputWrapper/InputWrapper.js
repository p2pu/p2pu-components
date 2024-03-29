import React from 'react';
import PropTypes from 'prop-types';
import "./input_wrapper.css";
var InputWrapper = function InputWrapper(props) {
  var id = props.id,
    name = props.name,
    label = props.label,
    labelPosition = props.labelPosition,
    required = props.required,
    disabled = props.disabled,
    errorMessage = props.errorMessage,
    helpText = props.helpText,
    classes = props.classes,
    children = props.children;
  var wrapperClasses = "form-group ".concat(classes ? classes : "", " ").concat(disabled ? "disabled" : "", " ").concat(labelPosition ? labelPosition : "");
  switch (labelPosition) {
    case 'left':
      return /*#__PURE__*/React.createElement("div", {
        className: wrapperClasses,
        id: id
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'baseline'
        }
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: name,
        className: "input-label left"
      }, label, required && '*'), /*#__PURE__*/React.cloneElement(children, {
        id: name,
        name: name,
        required: required
      })), helpText && /*#__PURE__*/React.createElement("div", {
        className: "form-text help-text",
        style: {
          marginRight: 'calc(13px + 0.5rem)'
        }
      }, helpText), errorMessage && /*#__PURE__*/React.createElement("div", {
        className: "error-message minicaps"
      }, errorMessage));
    case 'right':
      return /*#__PURE__*/React.createElement("div", {
        className: wrapperClasses,
        id: id
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'baseline'
        }
      }, /*#__PURE__*/React.cloneElement(children, {
        id: name,
        name: name,
        required: required
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: name,
        className: "input-label right"
      }, label, required && '*')), helpText && /*#__PURE__*/React.createElement("div", {
        className: "form-text help-text",
        style: {
          marginLeft: 'calc(13px + 0.5rem)'
        }
      }, helpText), errorMessage && /*#__PURE__*/React.createElement("div", {
        className: "error-message minicaps"
      }, errorMessage));
    default:
      return /*#__PURE__*/React.createElement("div", {
        className: wrapperClasses,
        id: id
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: name,
        className: "input-label"
      }, label, required && '*'), helpText && /*#__PURE__*/React.createElement("div", {
        className: "form-text help-text"
      }, helpText), /*#__PURE__*/React.cloneElement(children, {
        id: name,
        name: name,
        required: required
      }), errorMessage && /*#__PURE__*/React.createElement("div", {
        className: "error-message minicaps"
      }, errorMessage));
  }
};
InputWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  classes: PropTypes.string
};
export default InputWrapper;
//# sourceMappingURL=InputWrapper.js.map