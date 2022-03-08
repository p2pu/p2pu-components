import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import TopicsFilterForm from '../Courses/TopicsFilterForm';
import OrderCoursesForm from '../Courses/OrderCoursesForm';
import LanguageFilterForm from '../Courses/LanguageFilterForm';
import OerFilterForm from '../Courses/OerFilterForm';
import LocationFilterForm from './LocationFilterForm';

var FilterForm = function FilterForm(props) {
  var closeFilter = function closeFilter() {
    props.updateActiveFilter(null);
  };

  var openClass = props.activeFilter ? 'open' : '';

  var internalForm = function internalForm() {
    switch (props.activeFilter) {
      case 'topics':
        return /*#__PURE__*/React.createElement(TopicsFilterForm, props);

      case 'language':
        return /*#__PURE__*/React.createElement(LanguageFilterForm, _extends({}, props, {
          closeFilter: closeFilter
        }));

      case 'orderCourses':
        return /*#__PURE__*/React.createElement(OrderCoursesForm, _extends({}, props, {
          closeFilter: closeFilter
        }));

      case 'location':
        return /*#__PURE__*/React.createElement(LocationFilterForm, _extends({}, props, {
          closeFilter: closeFilter
        }));

      case 'oer':
        return /*#__PURE__*/React.createElement(OerFilterForm, _extends({}, props, {
          closeFilter: closeFilter
        }));
    }
  };

  return /*#__PURE__*/React.createElement(OutsideClickHandler, {
    onOutsideClick: closeFilter
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter-form-dropdown ".concat(openClass)
  }, /*#__PURE__*/React.createElement("div", {
    className: "close",
    style: {
      textAlign: 'right',
      "float": 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "material-icons",
    onClick: closeFilter
  }, "close")), internalForm()));
};

export default FilterForm;
//# sourceMappingURL=FilterForm.js.map