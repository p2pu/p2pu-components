import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import { t } from 'ttag';
import ApiHelper from '../utils/apiHelper';
import SelectWithLabel from '../InputFields/SelectWithLabel';
import Select from 'react-select';

var LanguageFilterForm = /*#__PURE__*/function (_Component) {
  _inherits(LanguageFilterForm, _Component);

  var _super = _createSuper(LanguageFilterForm);

  function LanguageFilterForm(props) {
    var _this;

    _classCallCheck(this, LanguageFilterForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchLanguages", function () {
      var resourceType = "coursesLanguages";
      var api = new ApiHelper(resourceType);
      var params = {};

      var callback = function callback(response) {
        var options = _this.mapArrayToSelectOptions(response.languages);

        _this.setState({
          options: options
        });
      };

      api.fetchResource({
        params: params,
        callback: callback
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (selected) {
      if (selected) {
        _this.props.updateQueryParams({
          languages: [].concat(_toConsumableArray(_this.props.languages), [selected.value])
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeLanguage", function (lang) {
      _this.props.updateQueryParams({
        languages: _this.props.languages.filter(function (l) {
          return l != lang;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "mapArrayToSelectOptions", function (array) {
      return array.map(function (item) {
        return {
          value: item.code,
          label: item.name_local
        };
      });
    });

    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(LanguageFilterForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchLanguages();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log('this.props.languages', this.props.languages);
      var options = this.state.options.filter(function (option) {
        return _this2.props.languages.indexOf(option.value) == -1;
      });

      var langName = function langName(lang) {
        var langs = _this2.state.options.filter(function (o) {
          return o.value === lang;
        });

        console.log(langs);

        if (langs.length) {
          return langs[0].label;
        }

        return lang;
      };

      var customStyles = {
        indicatorSeparator: function indicatorSeparator(provided, state) {
          return _objectSpread(_objectSpread({}, provided), {}, {
            display: 'none'
          });
        }
      };
      return /*#__PURE__*/React.createElement("form", {
        "class": "search"
      }, /*#__PURE__*/React.createElement("label", {
        "for": "search-input",
        "class": "form-label"
      }, "Languages"), /*#__PURE__*/React.createElement(Select, {
        name: 'languages',
        classes: "no-flex",
        options: options,
        isMulti: false,
        value: null,
        onChange: this.handleSelect,
        styles: customStyles
      }), /*#__PURE__*/React.createElement("div", {
        "class": "badges selected pt-4"
      }, this.props.languages.map(function (lang) {
        return /*#__PURE__*/React.createElement("span", {
          "class": "badge topic-selected topic"
        }, /*#__PURE__*/React.createElement("span", {
          "class": "material-icons dismiss",
          onClick: function onClick() {
            return _this2.removeLanguage(lang);
          }
        }, "close"), langName(lang));
      })));
    }
  }]);

  return LanguageFilterForm;
}(Component);

export { LanguageFilterForm as default };