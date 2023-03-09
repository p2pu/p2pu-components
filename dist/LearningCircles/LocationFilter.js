import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import React, { Component } from 'react';
import axios from 'axios';
import { t } from 'ttag';
import { CitySelect } from './CitySelect';
import Select from '../InputFields/Select';
var OnlineFilters = {
  EVERYTHING: null,
  ONLINE: "true",
  IN_PERSON: "false"
};
var LocationFilter = /*#__PURE__*/function (_Component) {
  _inherits(LocationFilter, _Component);
  var _super = _createSuper(LocationFilter);
  function LocationFilter(props) {
    var _this;
    _classCallCheck(this, LocationFilter);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "getLocation", function (e) {
      var useGeolocation = e.target.checked;
      _this.setState({
        gettingLocation: useGeolocation,
        useLocation: useGeolocation,
        error: null
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
      };
      var error = function error() {
        _this.setState({
          error: t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Unable to detect location."]))),
          gettingLocation: false,
          useLocation: false
        });
        _this.props.updateQueryParams({
          latitude: null,
          longitude: null,
          useLocation: useGeolocation
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
          error: t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Geolocation is not supported by this browser."]))),
          gettingLocation: false,
          useLocation: false
        });
        _this.props.updateQueryParams({
          latitude: null,
          longitude: null,
          useLocation: useGeolocation
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "detectDistanceUnit", function (lat, lon) {
      var countriesUsingMiles = ['US', 'GB', 'LR', 'MM'];
      var url = "http://api.geonames.org/countryCodeJSON?lat=".concat(lat, "&lng=").concat(lon, "&username=p2pu");
      axios.get(url).then(function (res) {
        var useMiles = countriesUsingMiles.indexOf(res.countryCode) >= 0;
        // update distance so that options in dropdown remains 5, 10, 25, ...
        // regardless of kilometer of miles
        var distance = _this.props.distance;
        if (useMiles != _this.props.useMiles) {
          distance = useMiles ? distance * 1.6 : distance * 0.625;
        }
        _this.props.updateQueryParams({
          useMiles: useMiles,
          distance: distance
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
      // want to get lat and lon for city
      _this.props.updateQueryParams(_objectSpread(_objectSpread({}, city), {}, {
        latitude: null,
        longitude: null
      }));
      _this.setState({
        useLocation: false,
        error: null
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleRangeChange", function (_ref) {
      var range = _ref.range;
      var distance = range;
      if (_this.props.useMiles) {
        return _this.props.updateQueryParams({
          distance: distance * 1.6
        });
      }
      _this.props.updateQueryParams({
        distance: distance
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleOnlineFilter", function (filter) {
      _this.props.updateQueryParams({
        online: filter
      });
    });
    _defineProperty(_assertThisInitialized(_this), "generateDistanceSliderLabel", function () {
      var unit = _this.props.useMiles ? t(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["miles"]))) : t(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["km"])));
      var value = _this.generateDistanceValue();
      return t(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Within ", " ", ""])), value, unit);
    });
    _defineProperty(_assertThisInitialized(_this), "generateDistanceValue", function () {
      var value = _this.props.useMiles ? _this.props.distance * 0.625 : _this.props.distance;
      return Math.round(value / 5) * 5;
    });
    _this.state = {
      useLocation: Boolean(props.latitude) && Boolean(props.longitude)
    };
    return _this;
  }
  _createClass(LocationFilter, [{
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
      var _this2 = this;
      var distanceValue = this.generateDistanceValue();
      return /*#__PURE__*/React.createElement("form", {
        className: "filter"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "search-input",
        className: "form-label"
      }, "Location"), /*#__PURE__*/React.createElement("div", {
        className: "search-input my-2 my-md-0"
      }, /*#__PURE__*/React.createElement(CitySelect, {
        name: "city",
        value: this.props.city,
        isClearable: true,
        handleChange: this.handleCitySelect,
        placeholder: t(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Start typing a city name"]))),
        origin: this.props.origin
      })), /*#__PURE__*/React.createElement("div", {
        className: "d-flex flex-column align-items-center p-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "divider-line"
      }), /*#__PURE__*/React.createElement("div", {
        className: "divider-text"
      }, "or")), /*#__PURE__*/React.createElement("div", {
        className: "input-group-md has-validation"
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: this.state.useLocation || false,
        onChange: this.getLocation,
        className: this.state.error ? 'is-invalid' : ''
      }), /*#__PURE__*/React.createElement("span", null, "Within"), /*#__PURE__*/React.createElement(Select, {
        className: "flex-grow-1",
        name: "range",
        options: [5, 10, 25, 50, 100].map(function (d) {
          return {
            label: "".concat(d),
            value: d
          };
        }),
        value: distanceValue,
        handleChange: this.handleRangeChange
      }), this.props.useMiles && /*#__PURE__*/React.createElement("span", null, "miles of my current location"), !this.props.useMiles && /*#__PURE__*/React.createElement("span", null, "kilometers of my current location"), /*#__PURE__*/React.createElement("span", {
        className: "material-icons"
      }, "place "), this.state.error && /*#__PURE__*/React.createElement("div", {
        className: "invalid-feedback"
      }, this.state.error)), /*#__PURE__*/React.createElement("div", {
        className: "my-3"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "search-input",
        className: "form-label"
      }, "In Person or Online"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
        className: "form-check"
      }, /*#__PURE__*/React.createElement("input", {
        className: "form-check-input",
        type: "radio",
        name: "online-filter",
        id: "everything",
        checked: this.props.online === OnlineFilters.EVERYTHING || this.props.online === undefined,
        onChange: function onChange() {
          return _this2.handleOnlineFilter(OnlineFilters.EVERYTHING);
        }
      }), /*#__PURE__*/React.createElement("label", {
        className: "form-check-label",
        htmlFor: "everything"
      }, "Everything")), /*#__PURE__*/React.createElement("div", {
        className: "form-check"
      }, /*#__PURE__*/React.createElement("input", {
        className: "form-check-input",
        type: "radio",
        name: "online-filter",
        id: "online",
        checked: this.props.online === OnlineFilters.ONLINE,
        onChange: function onChange() {
          return _this2.handleOnlineFilter(OnlineFilters.ONLINE);
        }
      }), /*#__PURE__*/React.createElement("label", {
        className: "form-check-label",
        htmlFor: "online"
      }, "Online")), /*#__PURE__*/React.createElement("div", {
        className: "form-check"
      }, /*#__PURE__*/React.createElement("input", {
        className: "form-check-input",
        type: "radio",
        name: "online-filter",
        id: "in-person",
        checked: this.props.online === OnlineFilters.IN_PERSON,
        onChange: function onChange() {
          return _this2.handleOnlineFilter(OnlineFilters.IN_PERSON);
        }
      }), /*#__PURE__*/React.createElement("label", {
        className: "form-check-label",
        htmlFor: "in-person"
      }, "In person")))));
    }
  }]);
  return LocationFilter;
}(Component);
export { LocationFilter as default };
//# sourceMappingURL=LocationFilter.js.map