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
import queryString from 'query-string';
import { SEARCH_PROPS, API_ENDPOINTS, OPEN_TAB_TEXT, CLOSED_TAB_TEXT } from '../utils/constants';
import ApiHelper from '../utils/apiHelper';
var SearchProvider = /*#__PURE__*/function (_Component) {
  _inherits(SearchProvider, _Component);
  var _super = _createSuper(SearchProvider);
  function SearchProvider(props) {
    var _this;
    _classCallCheck(this, SearchProvider);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "setInitialState", function () {
      var defaults = {
        searchResults: [],
        totalResults: 0,
        distance: 16,
        // this is in km, use miles below indicates UI display
        useMiles: true,
        limit: 21,
        offset: 0,
        isLoading: false,
        hasMoreResults: false,
        appendResults: false,
        order: _this.props.searchSubject === 'learningCircles' ? 'first_meeting_date' : null
      };
      var parsedParams = queryString.parse(window.location.search, {
        arrayFormat: 'comma'
      });
      var arrayItems = API_ENDPOINTS[_this.props.searchSubject].arrayItems;
      arrayItems.forEach(function (term) {
        if (parsedParams[term] && typeof parsedParams[term] === "string") {
          parsedParams[term] = [parsedParams[term]];
        }
      });
      var resultsTab; //??

      if (_this.props.searchSubject === 'learningCircles') {
        defaults.signup = 'open';
        defaults.resultsTab = parsedParams.signup && parsedParams.signup == 'closed' ? 1 : 0;
        defaults.online = null;
      }
      return _objectSpread(_objectSpread(_objectSpread({}, defaults), _this.props.initialState), parsedParams);
    });
    _defineProperty(_assertThisInitialized(_this), "updateURL", function (params) {
      var searchParams = API_ENDPOINTS[_this.props.searchSubject].searchParams;
      var privateParams = API_ENDPOINTS[_this.props.searchSubject].privateParams;
      var allowedParams = Object.keys(_this.state).filter(function (key) {
        return searchParams.includes(key) && !privateParams.includes(key);
      }).reduce(function (obj, key) {
        return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, _this.state[key]));
      }, {});
      var query = queryString.stringify(allowedParams, {
        skipNull: true,
        skipEmptyString: true,
        arrayFormat: 'comma'
      });
      window.history.replaceState(allowedParams, document.title, "".concat(window.location.pathname, "?").concat(query));
    });
    _defineProperty(_assertThisInitialized(_this), "updateResultsTab", function (tabIndex) {
      _this.setState({
        searchResults: []
      });
      _this.updateQueryParams({
        resultsTab: tabIndex,
        signup: tabIndex === 0 ? 'open' : 'closed',
        order: tabIndex === 0 ? 'first_meeting_date' : 'last_meeting_date'
      });
    });
    _this.initialState = _this.setInitialState();
    _this.state = _this.initialState;
    _this.handleChange = function (s) {
      return _this._handleChange(s);
    };
    _this.handleInputChange = function () {
      return _this._handleInputChange();
    };
    _this.handleSearchBarSubmit = function (query) {
      return _this._handleSearchBarSubmit(query);
    };
    _this.searchCallback = function (response, opts) {
      return _this._searchCallback(response, opts);
    };
    _this.updateQueryParams = function (params) {
      return _this._updateQueryParams(params);
    };
    _this.sendQuery = function (opts) {
      return _this._sendQuery(opts);
    };
    _this.loadInitialData = function () {
      return _this._loadInitialData();
    };
    _this.apiHelper = new ApiHelper(_this.props.searchSubject, _this.props.origin);
    return _this;
  }
  _createClass(SearchProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var scrollContainer = this.props.scrollContainer;
      var scrollContainerEl = scrollContainer ? document.querySelector(scrollContainer) : document.body;
      var getScrollTop = scrollContainer ? function () {
        return scrollContainerEl.scrollTop;
      } : function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      };
      scrollContainerEl.onscroll = function () {
        var _this2$state = _this2.state,
          isLoading = _this2$state.isLoading,
          hasMoreResults = _this2$state.hasMoreResults;
        if (isLoading || !hasMoreResults) {
          return;
        }
        var scrollTop = getScrollTop();
        var scrollHeight = document.querySelector(".search-results") && document.querySelector(".search-results").scrollHeight || document.body.scrollHeight;
        var clientHeight = window.innerHeight;
        var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        if (scrolledToBottom && !_this2.state.isLoading) {
          _this2.updateQueryParams({
            offset: _this2.state.searchResults.length,
            appendResults: true
          });
        }
      };
      this.loadInitialData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.city !== this.state.city) {
        this.updateResultsTab(0);
      }
    }
  }, {
    key: "_loadInitialData",
    value: function _loadInitialData() {
      this.sendQuery({
        initialQuery: true
      });
    }
  }, {
    key: "_sendQuery",
    value: function _sendQuery() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var params = this.state;
      var options = _objectSpread({
        params: params,
        callback: this.searchCallback
      }, opts);
      this.apiHelper.fetchResource(options);
    }
  }, {
    key: "_updateQueryParams",
    value: function _updateQueryParams(params) {
      var _this3 = this;
      this.setState(_objectSpread(_objectSpread({}, params), {}, {
        isLoading: true
      }), function () {
        _this3.sendQuery();
        _this3.updateURL();
      });
    }
  }, {
    key: "_handleChange",
    value: function _handleChange(selected) {
      var query = selected ? selected.label : selected;
      this.props.searchByLocation(query);
      this.setState({
        value: selected
      });
    }
  }, {
    key: "_handleInputChange",
    value: function _handleInputChange() {
      this.props.clearResults();
    }
  }, {
    key: "_searchCallback",
    value: function _searchCallback(response, opts) {
      var results = this.state.appendResults ? this.state.searchResults.concat(response.items) : response.items;
      this.setState({
        searchResults: results,
        currentQuery: opts.params,
        totalResults: response.count,
        offset: 0,
        isLoading: false,
        appendResults: false,
        hasMoreResults: response.count > 0 && results.length < response.count,
        initialQuery: opts.initialQuery,
        signupOpenCount: response.signup_open_count,
        signupClosedCount: response.signup_closed_count
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var showNoResultsComponent = this.state.totalResults === 0 && this.state.initialQuery && !Boolean(window.location.search);
      return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(this.props.children, function (child) {
        return /*#__PURE__*/React.cloneElement(child, _objectSpread(_objectSpread({
          updateQueryParams: _this4.updateQueryParams,
          searchSubject: _this4.props.searchSubject,
          order: _this4.props.order,
          results: _this4.state.searchResults,
          updateResultsTab: _this4.updateResultsTab,
          showNoResultsComponent: true
        }, _this4.state), _this4.props));
      }));
    }
  }]);
  return SearchProvider;
}(Component);
export { SearchProvider as default };
//# sourceMappingURL=SearchProvider.js.map