import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["name", "id", "label", "value", "handleChange", "required", "disabled", "errorMessage", "helpText", "classes", "placeholder", "apiKey", "tinymceScriptSrc", "maxLength"];
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputWrapper from '../InputWrapper';
import { Editor } from '@tinymce/tinymce-react';

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
      apiKey = props.apiKey,
      tinymceScriptSrc = props.tinymceScriptSrc,
      maxLength = props.maxLength,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      charCount = _useState2[0],
      setCharCount = _useState2[1];

  var onChange = function onChange(input, editor) {
    var wordcount = editor.plugins.wordcount;
    var charCount = wordcount.body.getCharacterCount();
    setCharCount(charCount);
    props.handleChange(_defineProperty({}, props.name, input));
  };

  var erroMessageWithCharCount = charCount > maxLength ? "The text is too long: ".concat(charCount, "/").concat(maxLength, " characters.") : errorMessage;
  return /*#__PURE__*/React.createElement(InputWrapper, {
    label: label,
    name: name,
    id: id,
    required: required,
    disabled: disabled,
    errorMessage: erroMessageWithCharCount,
    helpText: helpText,
    classes: classes
  }, /*#__PURE__*/React.createElement(Editor, {
    apiKey: apiKey,
    tinymceScriptSrc: tinymceScriptSrc,
    value: value,
    onEditorChange: onChange,
    init: {
      height: 300,
      menubar: false,
      plugins: ['link lists wordcount'],
      toolbar: 'undo redo | formatselect | bold italic | bullist numlist | link | removeformat',
      'valid_elements': 'p,h3,h4,h5,h6,strong,em,a,a[href|target=_blank|rel=noopener],ul,ol,li,div,span',
      'block_formats': 'Paragraph=p; Heading 1=h3; Heading 2=h4; Heading 3=h5'
    }
  }));
};

TextareaWithLabel.defaultProps = {
  type: 'text',
  value: "",
  required: false,
  disabled: false,
  label: 'Textarea input',
  classes: '',
  apiKey: '',
  handleChange: function handleChange(input) {
    return console.log("Implement a function to save input", input);
  },
  maxLength: 1000
};
TextareaWithLabel.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  classes: PropTypes.string,
  maxLength: PropTypes.number
};
export default TextareaWithLabel;