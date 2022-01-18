import React, { useState } from 'react';
import { CitySelectInput } from '../InputFields/CitySelect';

var LearningCircleFilters = function LearningCircleFilters(props) {
  return /*#__PURE__*/React.createElement("form", {
    "class": "filter"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "search-input",
    "class": "form-label"
  }, "Location"), /*#__PURE__*/React.createElement("div", {
    "class": "input-group-md"
  }, /*#__PURE__*/React.createElement("span", null, "Within"), /*#__PURE__*/React.createElement("select", {
    "class": "form-select",
    "aria-label": "Default select example"
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "1"), /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "5"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "10"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "25"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "50"), /*#__PURE__*/React.createElement("option", {
    value: "5"
  }, "100")), /*#__PURE__*/React.createElement("span", null, "miles of"), /*#__PURE__*/React.createElement("div", {
    className: "form-control search-input my-2 my-md-0"
  }, /*#__PURE__*/React.createElement(CitySelectInput, null)), /*#__PURE__*/React.createElement("span", {
    "class": "current-location"
  }, /*#__PURE__*/React.createElement("span", {
    "class": "material-icons"
  }, "place "), /*#__PURE__*/React.createElement("span", {
    "class": "text-muted"
  }, " use current location")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
    "class": "form-check"
  }, /*#__PURE__*/React.createElement("input", {
    "class": "form-check-input",
    type: "checkbox",
    value: "",
    id: "online"
  }), /*#__PURE__*/React.createElement("label", {
    "class": "form-check-label",
    "for": "online"
  }, "online")), /*#__PURE__*/React.createElement("div", {
    "class": "form-check"
  }, /*#__PURE__*/React.createElement("input", {
    "class": "form-check-input",
    type: "checkbox",
    value: "",
    id: "in-person"
  }), /*#__PURE__*/React.createElement("label", {
    "class": "form-check-label",
    "for": "in-person"
  }, "in person")))));
};

export default LearningCircleFilters;