import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import { t } from 'ttag';
import ApiHelper from '../utils/apiHelper';
import Select from '../InputFields/Select';

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

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (_ref) {
      var languages = _ref.languages;

      if (languages) {
        _this.props.updateQueryParams({
          languages: [].concat(_toConsumableArray(_this.props.languages), [languages])
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
      var res = array.map(function (item) {
        return {
          value: item.code,
          label: item.name_local
        };
      });
      res.sort(function (e1, e2) {
        return e1.label.localeCompare(e2.label);
      });
      return res;
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

      return /*#__PURE__*/React.createElement("form", {
        className: "search"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "search-input",
        className: "form-label"
      }, "Languages"), /*#__PURE__*/React.createElement(Select, {
        name: 'languages',
        classes: "no-flex",
        options: options,
        isMulti: false,
        value: null,
        handleChange: this.handleSelect,
        placeholder: t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Select one or more"])))
      }), /*#__PURE__*/React.createElement("div", {
        className: "badges selected pt-4"
      }, this.props.languages.map(function (lang) {
        return /*#__PURE__*/React.createElement("span", {
          className: "badge topic-selected topic"
        }, /*#__PURE__*/React.createElement("span", {
          className: "material-icons dismiss",
          role: "button",
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
//# sourceMappingURL=LanguageFilterForm.js.map