import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["name", "id", "label", "value", "handleChange", "required", "disabled", "errorMessage", "helpText", "classes", "placeholder"];
import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../InputWrapper';

var TextareaWithLabel = function TextareaWithLabel(props) {
  var name = props.name,
      id = props.id,
      label = props.label,
      value = props.value,
      handleChange = props.handleChange,
      required = props.required,
      disabled = props.disabled,
      errorMessage = props.errorMessage,
      helpText = props.helpText,
      classes = props.classes,
      placeholder = props.placeholder,
      rest = _objectWithoutProperties(props, _excluded);

  var onChange = function onChange(e) {
    props.handleChange(_defineProperty({}, props.name, e.currentTarget.value));
  };

  return /*#__PURE__*/React.createElement(InputWrapper, {
    label: label,
    name: name,
    id: id,
    required: required,
    disabled: disabled,
    errorMessage: errorMessage,
    helpText: helpText,
    classes: classes
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    className: "form-control"
  }, rest)));
};

TextareaWithLabel.defaultProps = {
  type: 'text',
  value: "",
  required: false,
  disabled: false,
  label: 'Textarea input',
  classes: '',
  handleChange: function handleChange(input) {
    return console.log("Implement a function to save input", input);
  }
};
TextareaWithLabel.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  classes: PropTypes.string
};
export default TextareaWithLabel;
//# sourceMappingURL=TextareaWithLabel.js.map