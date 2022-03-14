import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import CourseCard from './CourseCard';
import { t } from 'ttag';

var BrowseCourses = /*#__PURE__*/function (_React$Component) {
  _inherits(BrowseCourses, _React$Component);

  var _super = _createSuper(BrowseCourses);

  function BrowseCourses(props) {
    _classCallCheck(this, BrowseCourses);

    return _super.call(this, props);
  }

  _createClass(BrowseCourses, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          results = _this$props.results,
          updateQueryParams = _this$props.updateQueryParams,
          onSelectResult = _this$props.onSelectResult,
          columnBreakpoints = _this$props.columnBreakpoints,
          isLoading = _this$props.isLoading;
      return /*#__PURE__*/React.createElement("div", {
        className: "search-results row grid"
      }, results.map(function (course, index) {
        return /*#__PURE__*/React.createElement(CourseCard, {
          key: "course-card-".concat(index),
          id: "course-card-".concat(index),
          course: course,
          updateQueryParams: updateQueryParams,
          courseLink: _this.props.courseLink,
          moreInfo: _this.props.moreInfo,
          onSelectResult: onSelectResult,
          buttonText: t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Use this course"]))),
          classes: "col-md-4 mb-4"
        });
      }));
    }
  }]);

  return BrowseCourses;
}(React.Component);

export default BrowseCourses;
//# sourceMappingURL=Browse.js.map