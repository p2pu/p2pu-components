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
import SearchAndFilter from '../Courses/SearchAndFilter';
import SearchTags from '../Search/SearchTags';
import DefaultNoResults from '../Search/DefaultNoResults';
import { SEARCH_PROPS, OPEN_TAB_TEXT, CLOSED_TAB_TEXT } from '../utils/constants';

var SearchCourses = /*#__PURE__*/function (_Component) {
  _inherits(SearchCourses, _Component);

  var _super = _createSuper(SearchCourses);

  function SearchCourses(props) {
    _classCallCheck(this, SearchCourses);

    return _super.call(this, props);
  }

  _createClass(SearchCourses, [{
    key: "render",
    value: function render() {
      var extraProps = {
        filterCollection: SEARCH_PROPS[this.props.searchSubject].filters,
        sortCollection: SEARCH_PROPS[this.props.searchSubject].sort
      };
      var Browse = this.props.Browse;
      return /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "filter-sidebar sidebar sticky-top col-0 col-lg-4 col-xl-3"
      }, /*#__PURE__*/React.createElement(SearchAndFilter, _extends({
        placeholder: SEARCH_PROPS[this.props.searchSubject].placeholder
      }, extraProps, this.props))), /*#__PURE__*/React.createElement("div", {
        className: "col-12 col-lg-8 col-xl-9 ps-lg-3 ps-xl-4"
      }, /*#__PURE__*/React.createElement(SearchTags, this.props), /*#__PURE__*/React.createElement(Browse, this.props), this.props.isLoading && /*#__PURE__*/React.createElement("div", {
        className: "loader"
      })));
    }
  }]);

  return SearchCourses;
}(Component);

export { SearchCourses as default };
SearchCourses.defaultProps = {
  NoResultsComponent: function NoResultsComponent(props) {
    return /*#__PURE__*/React.createElement(DefaultNoResults, props);
  }
};