import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import { t } from 'ttag';
import SearchAndFilter from './SearchAndFilter';
import SearchTags from './SearchTags';
import DefaultNoResults from './DefaultNoResults';
import { SEARCH_PROPS } from '../utils/constants';

var Search = /*#__PURE__*/function (_Component) {
  _inherits(Search, _Component);

  var _super = _createSuper(Search);

  function Search(props) {
    _classCallCheck(this, Search);

    return _super.call(this, props);
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var extraProps = {
        filterCollection: SEARCH_PROPS[this.props.searchSubject].filters,
        sortCollection: SEARCH_PROPS[this.props.searchSubject].sort
      };
      var Browse = this.props.Browse;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchAndFilter, _extends({
        placeholder: SEARCH_PROPS[this.props.searchSubject].placeholder
      }, extraProps, this.props)), /*#__PURE__*/React.createElement(SearchTags, this.props), /*#__PURE__*/React.createElement(Browse, this.props), this.props.isLoading && /*#__PURE__*/React.createElement("div", {
        className: "loader"
      }));
    }
  }]);

  return Search;
}(Component);

export { Search as default };
Search.defaultProps = {
  NoResultsComponent: function NoResultsComponent(props) {
    return /*#__PURE__*/React.createElement(DefaultNoResults, props);
  }
};
//# sourceMappingURL=Search.js.map