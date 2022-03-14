import _extends from "@babel/runtime/helpers/extends";
import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["name", "id", "required", "disabled", "value", "errorMessage", "helpText", "classes", "selectClasses", "options", "handleChange", "isMulti"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { default as ReactSelect } from 'react-select';

var Select = function Select(props) {
  var name = props.name,
      id = props.id,
      required = props.required,
      disabled = props.disabled,
      value = props.value,
      errorMessage = props.errorMessage,
      helpText = props.helpText,
      classes = props.classes,
      selectClasses = props.selectClasses,
      options = props.options,
      handleChange = props.handleChange,
      isMulti = props.isMulti,
      rest = _objectWithoutProperties(props, _excluded);

  var customStyles = {
    indicatorSeparator: function indicatorSeparator(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        display: 'none'
      });
    }
  };

  var onChange = function onChange(selected) {
    if (!selected) {
      return handleChange(_defineProperty({}, name, null));
    }

    if (isMulti) {
      var _value = selected.map(function (s) {
        return s.value;
      });

      return handleChange(_defineProperty({}, name, _value));
    }

    return handleChange(_defineProperty({}, name, selected.value));
  };

  var getSelected = function getSelected(value) {
    if (!value) {
      return null;
    }

    if (isMulti && _typeof(value === 'object')) {
      return value.map(function (v) {
        return options.find(function (o) {
          return o.value === v;
        });
      });
    }

    return options.find(function (o) {
      return o.value === value;
    });
  };

  var selected = getSelected(value);
  return /*#__PURE__*/React.createElement(ReactSelect, _extends({
    name: name,
    className: selectClasses,
    value: selected,
    options: options,
    onChange: onChange,
    isMulti: isMulti,
    isDisabled: disabled,
    classNamePrefix: 'react-select',
    styles: customStyles,
    theme: function theme(_theme) {
      return _objectSpread(_objectSpread({}, _theme), {}, {
        colors: _objectSpread(_objectSpread({}, _theme.colors), {}, {
          primary: '#05c6b4',
          primary75: '#D3D8E6',
          primary50: '#e0f7f5',
          primary25: '#F3F4F8'
        })
      });
    }
  }, rest));
};

export default Select;
//# sourceMappingURL=Select.js.map