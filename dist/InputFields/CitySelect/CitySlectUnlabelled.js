import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/typeof";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["label", "name", "id", "value", "disabled", "required", "errorMessage", "helpText", "classes", "selectClasses", "handleInputChange", "noResultsText", "placeholder", "isClearable", "isMulti"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import jsonp from 'jsonp';
import InputWrapper from '../InputWrapper';

var CitySelect = /*#__PURE__*/function (_Component) {
  _inherits(CitySelect, _Component);

  var _super = _createSuper(CitySelect);

  function CitySelect(props) {
    var _this;

    _classCallCheck(this, CitySelect);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (selected) {
      var query = selected ? selected.label : selected;

      _this.props.handleChange(_defineProperty({}, _this.props.name, query));
    });

    _defineProperty(_assertThisInitialized(_this), "populateCities", function () {
      var url = 'https://learningcircles.p2pu.org/api/learningcircles/cities';
      jsonp(url, null, function (err, res) {
        if (err) {
          console.log(err);
        } else {
          if (res.items) {
            _this.filterCitiesFromResults(res.items);
          } else {
            console.log(res);
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterCitiesFromResults", function (cities) {
      cities = cities.filter(function (city) {
        return city;
      });

      var uniqBy = function uniqBy(arr, fn) {
        return _toConsumableArray(new Map(arr.map(function (x) {
          return [typeof fn === 'function' ? fn(x) : x[fn], x];
        })).values());
      };

      cities = uniqBy(cities, function (el) {
        return el.value;
      });

      _this.setState({
        cities: cities
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getSelected", function (value) {
      var isMulti = _this.props.isMulti;
      var cities = _this.state.cities;

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
    });

    _this.state = {
      cities: []
    };

    _this.populateCities();

    return _this;
  }

  _createClass(CitySelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          name = _this$props.name,
          id = _this$props.id,
          value = _this$props.value,
          disabled = _this$props.disabled,
          required = _this$props.required,
          errorMessage = _this$props.errorMessage,
          helpText = _this$props.helpText,
          classes = _this$props.classes,
          selectClasses = _this$props.selectClasses,
          handleInputChange = _this$props.handleInputChange,
          noResultsText = _this$props.noResultsText,
          placeholder = _this$props.placeholder,
          isClearable = _this$props.isClearable,
          isMulti = _this$props.isMulti,
          rest = _objectWithoutProperties(_this$props, _excluded);

      var cities = this.state.cities;
      var selected = this.getSelected(value);
      return /*#__PURE__*/React.createElement(InputWrapper, {
        label: label,
        name: name,
        id: id,
        required: required,
        disabled: disabled,
        errorMessage: errorMessage,
        helpText: helpText,
        classes: classes
      }, /*#__PURE__*/React.createElement(Select, _extends({
        name: name,
        className: "city-select ".concat(selectClasses),
        value: selected,
        options: cities,
        onChange: this.onChange,
        onInputChange: handleInputChange,
        noResultsText: noResultsText,
        placeholder: placeholder,
        isClearable: isClearable,
        isMulti: isMulti,
        isDisabled: disabled,
        classNamePrefix: 'city-select',
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
      }, rest)));
    }
  }]);

  return CitySelect;
}(Component);

export { CitySelect as default };
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
//# sourceMappingURL=CitySlectUnlabelled.js.map