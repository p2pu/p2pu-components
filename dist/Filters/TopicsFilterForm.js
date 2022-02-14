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
import ApiHelper from '../utils/apiHelper';
import { t } from 'ttag';
import Select from 'react-select';

var TopicsFilterForm = /*#__PURE__*/function (_Component) {
  _inherits(TopicsFilterForm, _Component);

  var _super = _createSuper(TopicsFilterForm);

  function TopicsFilterForm(props) {
    var _this;

    _classCallCheck(this, TopicsFilterForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchTopics", function () {
      var resourceType = "".concat(_this.props.searchSubject, "Topics");
      var api = new ApiHelper(resourceType);
      var params = {};

      var callback = function callback(response) {
        var topics = Object.keys(response.topics).sort();

        var options = _this.mapArrayToSelectOptions(topics);

        _this.setState({
          options: options
        });
      };

      api.fetchResource({
        params: params,
        callback: callback
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (selected) {
      var _this$props$topics = _this.props.topics,
          topics = _this$props$topics === void 0 ? [] : _this$props$topics;

      if (selected) {
        _this.props.updateQueryParams({
          topics: [].concat(_toConsumableArray(topics), [selected.value])
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeTopic", function (topic) {
      _this.props.updateQueryParams({
        topics: _this.props.topics.filter(function (t) {
          return t != topic;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "mapArrayToSelectOptions", function (array) {
      return array.map(function (topic) {
        return {
          value: topic,
          label: topic
        };
      });
    });

    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(TopicsFilterForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchTopics();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$topics2 = this.props.topics,
          topics = _this$props$topics2 === void 0 ? [] : _this$props$topics2;
      var options = this.state.options.filter(function (option) {
        return topics.indexOf(option.value) == -1;
      });
      var customStyles = {
        indicatorSeparator: function indicatorSeparator(provided, state) {
          return _objectSpread(_objectSpread({}, provided), {}, {
            display: 'none'
          });
        }
      };
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
        "class": "search"
      }, /*#__PURE__*/React.createElement("label", {
        "for": "search-input",
        "class": "form-label"
      }, "Topics"), /*#__PURE__*/React.createElement(Select, {
        name: 'topics',
        options: options,
        isMulti: false,
        value: null,
        onChange: this.onChange,
        styles: customStyles
      }), /*#__PURE__*/React.createElement("div", {
        "class": "badges selected pt-4"
      }, this.props.topics && topics.map(function (topic) {
        return /*#__PURE__*/React.createElement("span", {
          "class": "badge topic-selected topic"
        }, /*#__PURE__*/React.createElement("span", {
          "class": "material-icons dismiss",
          onClick: function onClick(e) {
            return _this2.removeTopic(topic);
          }
        }, "close"), topic);
      }))));
    }
  }]);

  return TopicsFilterForm;
}(Component);

export { TopicsFilterForm as default };