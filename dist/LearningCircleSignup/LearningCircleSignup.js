import _extends from "@babel/runtime/helpers/extends";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var _excluded = ["learningCircle"];
import React, { useRef, useEffect } from 'react';
import { ngettext, msgid, t, jt } from 'ttag';
import SignupForm from './SignupForm';
import { day, date, time } from '../utils/i18n';
var LearningCircleSignup = function LearningCircleSignup(_ref) {
  var learningCircle = _ref.learningCircle,
    rest = _objectWithoutProperties(_ref, _excluded);
  var form = useRef();
  useEffect(function () {
    return form.current.scrollIntoView({
      behavior: "smooth"
    });
  });
  var course = learningCircle.course;
  var meetingDay = /*#__PURE__*/React.createElement("strong", null, day(learningCircle.day));
  var startDate = /*#__PURE__*/React.createElement("strong", null, date(learningCircle.start_date));
  var startTime = /*#__PURE__*/React.createElement("strong", null, time(learningCircle.meeting_time));
  var endTime = /*#__PURE__*/React.createElement("strong", null, time(learningCircle.end_time));
  var courseProviderLink = /*#__PURE__*/React.createElement("a", {
    href: course.link,
    target: "_blank"
  }, learningCircle.course.provider);
  var venueLink = /*#__PURE__*/React.createElement("a", {
    href: learningCircle.venue_website
  }, learningCircle.venue);
  return /*#__PURE__*/React.createElement("div", {
    className: "form-container pt-5",
    ref: form
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-5"
  }, t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Sign up for ", ""])), course.title)), /*#__PURE__*/React.createElement("p", null, course.caption))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, learningCircle.image_url && /*#__PURE__*/React.createElement("img", {
    className: "img-fluid",
    src: learningCircle.image_url
  }), /*#__PURE__*/React.createElement("p", null, learningCircle.description), /*#__PURE__*/React.createElement("p", null, t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Facilitated by ", ""])), learningCircle.facilitator)), /*#__PURE__*/React.createElement("p", null, jt(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Course materials provided by ", ""])), courseProviderLink)), /*#__PURE__*/React.createElement("p", null, learningCircle.weeks <= 1 && jt(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["This learning circle meets ", " from ", " to ", " (", "), ", "."])), meetingDay, startTime, endTime, learningCircle.time_zone, startDate), learningCircle.weeks > 1 && jt(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["This learning circle meets every ", " from ", " to ", " (", ") starting ", " for ", " weeks."])), meetingDay, startTime, endTime, learningCircle.time_zone, startDate, learningCircle.weeks)), /*#__PURE__*/React.createElement("p", null, jt(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["At ", ""])), venueLink))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement(SignupForm, _extends({
    learningCircle: learningCircle
  }, rest)))));
};
export default LearningCircleSignup;
//# sourceMappingURL=LearningCircleSignup.js.map