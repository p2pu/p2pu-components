import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
import React from 'react';
import { t } from "ttag";
import { Card, CardTitle, CardBody } from '../Card';
import { COLOR_CLASSES } from '../utils/constants';
import { date, day, time } from '../utils/i18n';
var cardFormatting = {
  'upcoming': {
    color: 'p2pu-blue',
    label: 'Starting soon',
    "class": 'starting-soon'
  },
  'in_progress': {
    color: 'p2pu-green',
    label: 'In progress',
    "class": 'in-progress'
  },
  'closed': {
    color: 'p2pu-yellow',
    label: 'Sign up closed',
    "class": 'signup-closed'
  },
  'completed': {
    color: 'p2pu-gray',
    label: 'Completed',
    "class": 'closed'
  }
};
var LearningCircleCard = function LearningCircleCard(props) {
  var learningCircle = props.learningCircle,
    locale = props.locale,
    onSelectResult = props.onSelectResult;
  var formattedStartDate = date(learningCircle.start_date, locale);
  var formattedStartTime = time(learningCircle.meeting_time);
  var formattedEndDate = date(learningCircle.last_meeting_date, locale);
  var formattedEndTime = time(learningCircle.end_time);
  var weekDay = day(learningCircle.day);
  var schedule = learningCircle.meets_weekly ? t(_templateObject || (_templateObject = _taggedTemplateLiteral(["", " from ", " to ", " (", ")"])), weekDay, formattedStartTime, formattedEndTime, learningCircle.time_zone) : t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["", " to ", " (", ")"])), formattedStartTime, formattedEndTime, learningCircle.time_zone);
  var frequency = learningCircle.meets_weekly ? t(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", " weeks starting ", ""])), learningCircle.weeks, formattedStartDate) : t(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["", " meetings starting ", ""])), learningCircle.weeks, formattedStartDate);
  var name = learningCircle.name ? learningCircle.name : learningCircle.course.title;
  var isSignupOpen = props.isSignupOpen;
  var today = new Date();
  var startDate = new Date(learningCircle.start_date);
  var endDate = new Date(learningCircle.last_meeting_date);
  var isUpcoming = startDate > today;
  var isCompleted = endDate < today;
  var isInProgress = startDate < today && endDate > today;
  var status = learningCircle.status || 'completed';
  var colorClass = cardFormatting[status].color;
  var cardLabel = cardFormatting[status].label;
  var dateLabel = t(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Ended ", ""])), formattedEndDate);
  if (status === 'in_progress' || status === 'closed') {
    dateLabel = t(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Started ", ""])), formattedStartDate);
  } else if (status === 'upcoming') {
    dateLabel = t(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Starting ", ""])), formattedStartDate);
  }
  var onClick = function onClick(e) {
    e.preventDefault();
    if (onSelectResult) {
      onSelectResult(learningCircle);
    } else {
      window.location.href = learningCircle.url;
    }
  };
  var imageUrl = props.defaultImageUrl;
  if (learningCircle.image_url) {
    imageUrl = learningCircle.image_url;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "result-item grid-item col-md-6 col-lg-4"
  }, /*#__PURE__*/React.createElement("a", {
    className: "learning-circle-card-link",
    href: learningCircle.url,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "card learning-circle ".concat(cardFormatting[status]["class"])
  }, /*#__PURE__*/React.createElement("div", {
    className: "status-tag"
  }, /*#__PURE__*/React.createElement("span", null, t(cardLabel))), /*#__PURE__*/React.createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: name,
    className: "card-img-top"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, dateLabel), /*#__PURE__*/React.createElement("h3", {
    className: "card-title"
  }, name)), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "schedule"
  }, /*#__PURE__*/React.createElement("i", {
    className: "material-icons"
  }, "schedule"), schedule), /*#__PURE__*/React.createElement("span", {
    className: "duration"
  }, /*#__PURE__*/React.createElement("i", {
    className: "material-icons"
  }, "today"), frequency), /*#__PURE__*/React.createElement("span", {
    className: "city-country"
  }, /*#__PURE__*/React.createElement("i", {
    className: "material-icons"
  }, "place"), learningCircle.city), /*#__PURE__*/React.createElement("span", {
    className: "facilitator"
  }, /*#__PURE__*/React.createElement("i", {
    className: "material-icons"
  }, "face"), t(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Facilitated by ", ""])), learningCircle.facilitator)), /*#__PURE__*/React.createElement("span", {
    className: "location"
  }, /*#__PURE__*/React.createElement("i", {
    className: "material-icons"
  }, "store"), t(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Meeting at ", ""])), learningCircle.venue))), /*#__PURE__*/React.createElement("div", {
    className: "card-footer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn p2pu-btn btn-sm gray mx-auto d-block"
  }, isSignupOpen ? t(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Sign up"]))) : t(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["View details"]))))))));
};
export default LearningCircleCard;
//# sourceMappingURL=LearningCircleCard.js.map