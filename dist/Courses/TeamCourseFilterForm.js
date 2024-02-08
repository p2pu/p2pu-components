import React from 'react';
var TeamCourseFilterForm = function TeamCourseFilterForm(props) {
  if (!props.teamCourseList) return null;
  var handleChange = function handleChange(event) {
    props.updateQueryParams({
      team: event.currentTarget.checked
    });
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "filter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    id: "team-input",
    name: "team",
    type: "checkbox",
    checked: Boolean(props.team),
    onChange: handleChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "team-input"
  }, "Limit to courses suggested for your team?"))));
};
export default TeamCourseFilterForm;
//# sourceMappingURL=TeamCourseFilterForm.js.map