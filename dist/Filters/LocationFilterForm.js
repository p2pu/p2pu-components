import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import axios from 'axios';
import { t } from 'ttag';
import CheckboxWithLabel from '../InputFields/CheckboxWithLabel';
import RangeSliderWithLabel from '../InputFields/RangeSliderWithLabel';
import CitySelect from '../InputFields/CitySelect';

var LocationFilterForm = /*#__PURE__*/function (_Component) {
  _inherits(LocationFilterForm, _Component);

  var _super = _createSuper(LocationFilterForm);

  function LocationFilterForm(props) {
    var _this;

    _classCallCheck(this, LocationFilterForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getLocation", function (checkboxValue) {
      var useGeolocation = checkboxValue['geolocation'];

      _this.setState({
        gettingLocation: useGeolocation,
        useLocation: useGeolocation
      });

      if (useGeolocation === false) {
        _this.props.updateQueryParams({
          latitude: null,
          longitude: null,
          useLocation: useGeolocation
        });

        return;
      }

      var success = function success(position) {
        _this.props.updateQueryParams({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          city: null
        });

        _this.detectDistanceUnit(position.coords.latitude, position.coords.longitude);

        _this.setState({
          gettingLocation: false
        });

        _this.props.closeFilter();
      };

      var error = function error() {
        _this.setState({
          error: t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Unable to detect location."])))
        });
      };

      var options = {
        timeout: 10000,
        maximumAge: 60000
      };

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(success, error, options);
      } else {
        _this.setState({
          error: t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Geolocation is not supported by this browser."])))
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "detectDistanceUnit", function (lat, lon) {
      var countriesUsingMiles = ['US', 'GB', 'LR', 'MM'];
      var url = "http://api.geonames.org/countryCodeJSON?lat=".concat(lat, "&lng=").concat(lon, "&username=p2pu");
      axios.get(url).then(function (res) {
        var useMiles = countriesUsingMiles.indexOf(res.countryCode) >= 0;

        _this.props.updateQueryParams({
          useMiles: useMiles
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generateLocationLabel", function () {
      var label = t(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Use my current location"])));

      if (_this.state.error) {
        label = _this.state.error;
      } else if (_this.state.gettingLocation) {
        label = t(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Detecting your location..."])));
      } else if (!_this.state.gettingLocation && _this.props.latitude && _this.props.longitude) {
        label = t(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Using your current location"])));
      }

      return label;
    });

    _defineProperty(_assertThisInitialized(_this), "handleCitySelect", function (city) {
      _this.props.updateQueryParams(_objectSpread(_objectSpread({}, city), {}, {
        latitude: null,
        longitude: null,
        distance: 50
      }));

      _this.setState({
        useLocation: false
      });

      _this.props.closeFilter();
    });

    _defineProperty(_assertThisInitialized(_this), "handleRangeChange", function (_ref) {
      var distance = _ref.distance;

      if (_this.props.useMiles) {
        return _this.props.updateQueryParams({
          distance: distance * 1.6
        });
      }

      _this.props.updateQueryParams({
        distance: distance
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generateDistanceSliderLabel", function () {
      var unit = _this.props.useMiles ? t(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["miles"]))) : t(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["km"])));

      var value = _this.generateDistanceValue();

      return t(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Within ", " ", ""])), value, unit);
    });

    _defineProperty(_assertThisInitialized(_this), "generateDistanceValue", function () {
      var value = _this.props.useMiles ? _this.props.distance * 0.62 : _this.props.distance;
      return Math.round(value / 10) * 10;
    });

    _this.state = {
      useLocation: Boolean(props.latitude) && Boolean(props.longitude)
    };
    return _this;
  }

  _createClass(LocationFilterForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        if (this.props.latitude === null && this.props.longitude === null) {
          this.setState({
            useLocation: false
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var distanceSliderLabel = this.generateDistanceSliderLabel();
      var distanceValue = this.generateDistanceValue();
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        "for": "search-input",
        "class": "form-label"
      }, "Location"), /*#__PURE__*/React.createElement(CheckboxWithLabel, {
        classes: "col-sm-12",
        name: "geolocation",
        label: this.generateLocationLabel(),
        value: this.state.useLocation || false,
        handleChange: this.getLocation
      }), /*#__PURE__*/React.createElement(RangeSliderWithLabel, {
        classes: "col-sm-12",
        label: distanceSliderLabel,
        name: "distance",
        value: distanceValue,
        handleChange: this.handleRangeChange,
        min: 10,
        max: 150,
        step: 10,
        disabled: !this.state.useLocation
      }), /*#__PURE__*/React.createElement("div", {
        className: "divider col-sm-12"
      }, /*#__PURE__*/React.createElement("div", {
        className: "divider-line"
      }), /*#__PURE__*/React.createElement("div", {
        className: "divider-text"
      }, t(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["or"]))))), /*#__PURE__*/React.createElement(CitySelect, {
        label: t(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Select a location"]))),
        classes: "city-select col-sm-12 search-input",
        name: "city",
        value: this.props.city,
        handleChange: this.handleCitySelect,
        placeholder: t(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Start typing a city name"]))),
        noResultsText: t(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["No results for this city"]))),
        isMulti: false
      }));
    }
  }]);

  return LocationFilterForm;
}(Component);

export { LocationFilterForm as default };