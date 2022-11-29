import React from 'react';
import SearchBar from '../Search/SearchBar';
import OrderCoursesForm from './OrderCoursesForm';
import TopicsFilterForm from './TopicsFilterForm';
import LanguageFilterForm from './LanguageFilterForm';
import OerFilterForm from './OerFilterForm';
import FacilitatorGuideFilterForm from './FacilitatorGuideFilterForm';

var SearchAndFilter = function SearchAndFilter(props) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar-expand-lg"
  }, /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#course-filters",
    "aria-controls": "course-filters"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, "filter_list"), " Search and filter"), /*#__PURE__*/React.createElement("div", {
    className: "filter-card offcanvas offcanvas-start filters wrap p-lg-3",
    tabindex: "-1",
    id: "course-filters",
    "aria-labelledby": "filters-label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "offcanvas-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "offcanvas-title",
    id: "filters-label"
  }, "Filter Resources"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close text-reset",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "filter-fields row g-0 offcanvas-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement(SearchBar, {
    placeholder: props.placeholder,
    updateQueryParams: props.updateQueryParams,
    q: props.q
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 pt-3"
  }, /*#__PURE__*/React.createElement(OrderCoursesForm, props)), /*#__PURE__*/React.createElement("div", {
    className: "col-12 pt-3"
  }, /*#__PURE__*/React.createElement(TopicsFilterForm, props)), /*#__PURE__*/React.createElement("div", {
    className: "col-12 pt-3"
  }, /*#__PURE__*/React.createElement(LanguageFilterForm, props)), /*#__PURE__*/React.createElement("div", {
    className: "col-12 pt-3"
  }, /*#__PURE__*/React.createElement(FacilitatorGuideFilterForm, props)), /*#__PURE__*/React.createElement("div", {
    className: "col-12 pt-3"
  }, /*#__PURE__*/React.createElement(OerFilterForm, props)))));
};

export default SearchAndFilter;
//# sourceMappingURL=SearchAndFilter.js.map