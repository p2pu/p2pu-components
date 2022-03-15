import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var _excluded = ["name", "id", "value", "disabled", "required", "errorMessage", "classes", "selectClasses", "handleInputChange", "noResultsText", "placeholder", "isClearable", "isMulti"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import jsonp from 'jsonp';
export var CitySelect = function CitySelect(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      cities = _useState2[0],
      setCities = _useState2[1];

  useEffect(function () {
    var url = "".concat(props.origin, "/api/learningcircles/cities/");
    jsonp(url, null, function (err, res) {
      if (err) {
        console.log(err);
      } else {
        if (res.items) {
          var cities_ = res.items.filter(function (city) {
            return city;
          });

          var uniqBy = function uniqBy(arr, fn) {
            return _toConsumableArray(new Map(arr.map(function (x) {
              return [typeof fn === 'function' ? fn(x) : x[fn], x];
            })).values());
          };

          cities_ = uniqBy(cities_, function (el) {
            return el.value;
          });
          setCities(cities_);
        } else {
          console.log(res);
        }
      }
    });
  }, []);

  var onChange = function onChange(selected) {
    var query = selected ? selected.label : selected;
    props.handleChange(_defineProperty({}, props.name, query));
  };

  var getSelected = function getSelected(value) {
    var isMulti = props.isMulti;

    if (!value) {
      return null;
    }

    if (isMulti && _typeof(value === 'object')) {
      return value.map(function (v) {
        return cities.find(function (city) {
          return city.label === v;
        });
      });
    }

    return cities.find(function (city) {
      return city.label === value;
    });
  };

  var name = props.name,
      id = props.id,
      value = props.value,
      disabled = props.disabled,
      required = props.required,
      errorMessage = props.errorMessage,
      classes = props.classes,
      selectClasses = props.selectClasses,
      handleInputChange = props.handleInputChange,
      noResultsText = props.noResultsText,
      placeholder = props.placeholder,
      isClearable = props.isClearable,
      isMulti = props.isMulti,
      rest = _objectWithoutProperties(props, _excluded);

  var selected = getSelected(value);
  var customStyles = {
    indicatorSeparator: function indicatorSeparator(provided, state) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        display: 'none'
      });
    }
  };
  return /*#__PURE__*/React.createElement(Select, _extends({
    name: name,
    className: "city-select ".concat(selectClasses),
    value: selected,
    options: cities,
    onChange: onChange,
    onInputChange: handleInputChange,
    noResultsText: noResultsText,
    placeholder: placeholder,
    isClearable: isClearable,
    isMulti: isMulti,
    isDisabled: disabled,
    classNamePrefix: 'city-select',
    styles: customStyles
  }, rest));
};
CitySelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  classes: PropTypes.string,
  noResultsText: PropTypes.string,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  errorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool
};
CitySelect.defaultProps = {
  noResultsText: "No results for this city",
  placeholder: "Start typing a city name...",
  classes: "",
  name: "select-city",
  handleChange: function handleChange(selected) {
    return console.log("Implement a function to save selection", selected);
  },
  isClearable: true,
  isMulti: false,
  value: null
};
export default CitySelect;
//# sourceMappingURL=CitySelect.js.map