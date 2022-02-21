import React from 'react';
import SearchBar from '../Search/SearchBar';
import OrderCoursesForm from '../Filters/OrderCoursesForm';
import TopicsFilterForm from '../Filters/TopicsFilterForm';
import LanguageFilterForm from '../Filters/LanguageFilterForm';
import OerFilterForm from '../Filters/OerFilterForm';
import FacilitatorGuideFilterForm from '../Filters/FacilitatorGuideFilterForm';

var SearchAndFilter = function SearchAndFilter(props) {
  return /*#__PURE__*/React.createElement("nav", {
    "class": "navbar-expand-lg"
  }, /*#__PURE__*/React.createElement("button", {
    "class": "navbar-toggler",
    type: "button",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#course-filters",
    "aria-controls": "course-filters"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "material-icons"
  }, "filter_list")), /*#__PURE__*/React.createElement("div", {
    "class": "offcanvas offcanvas-start filters wrap pe-lg-3 pe-xl-4",
    tabindex: "-1",
    id: "course-filters",
    "aria-labelledby": "filters-label"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "offcanvas-header"
  }, /*#__PURE__*/React.createElement("h3", {
    "class": "offcanvas-title",
    id: "filters-label"
  }, "Filter Courses"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "class": "btn-close text-reset",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    "class": "filter-fields row g-0 offcanvas-body"
  }, /*#__PURE__*/React.createElement("div", {
    "class": "col-12"
  }, /*#__PURE__*/React.createElement(SearchBar, {
    placeholder: props.placeholder,
    updateQueryParams: props.updateQueryParams,
    q: props.q
  })), /*#__PURE__*/React.createElement("div", {
    "class": "col-12"
  }, /*#__PURE__*/React.createElement(OrderCoursesForm, props)), /*#__PURE__*/React.createElement("div", {
    "class": "col-12"
  }, /*#__PURE__*/React.createElement(TopicsFilterForm, props)), /*#__PURE__*/React.createElement("div", {
    "class": "col-12"
  }, /*#__PURE__*/React.createElement(LanguageFilterForm, props)), /*#__PURE__*/React.createElement("div", {
    "class": "col-12"
  }, /*#__PURE__*/React.createElement(FacilitatorGuideFilterForm, props)), /*#__PURE__*/React.createElement("div", {
    "class": "col-12"
  }, /*#__PURE__*/React.createElement(OerFilterForm, props)))));
};

export default SearchAndFilter;
//# sourceMappingURL=SearchAndFilter.js.map