import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

import React, { Fragment } from 'react';
import { t, jt, ngettext, msgid } from 'ttag';
import { COLOR_CLASSES } from '../utils/constants';

var CourseCard = function CourseCard(props) {
  var _props$courseLink = props.courseLink,
      courseLink = _props$courseLink === void 0 ? false : _props$courseLink,
      _props$moreInfo = props.moreInfo,
      moreInfo = _props$moreInfo === void 0 ? true : _props$moreInfo;
  var availability = props.course.on_demand ? t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Always available"]))) : t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Check availability"])));

  var handleFilterClick = function handleFilterClick(topic) {
    return function (event) {
      event.preventDefault();
      props.updateQueryParams({
        topics: [topic]
      });
    };
  };

  var topicsList = props.course.topics.slice(0, 5).map(function (topic) {
    return /*#__PURE__*/React.createElement("a", {
      className: "tag",
      onClick: handleFilterClick(topic),
      href: ""
    }, topic);
  });
  var colorClass = COLOR_CLASSES[props.course.id % COLOR_CLASSES.length];
  var rating_number = props.course.total_ratings;
  var rating = jt(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", " ratings"])), rating_number);

  if (props.course.total_ratings == 1) {
    rating = jt(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["", " rating"])), rating_number);
  }

  var usage_number = props.course.learning_circles;
  var usage = jt(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Used in ", " learning circles"])), usage_number);

  if (props.course.learning_circles == 1) {
    usage = jt(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Used in ", " learning circle"])), usage_number);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "card col-12 course horizontal in-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row g-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-md-6 col-lg-12 col-xl-7"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "card-title"
  }, props.course.title), /*#__PURE__*/React.createElement("div", {
    className: "lowbrow row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stars mb-2 pe-md-0 d-flex col-12 col-md-auto"
  }, [1, 2, 3, 4, 5].map(function (num) {
    var rating = Math.round(props.course.overall_rating * 2) / 2;

    if (rating >= num) {
      return /*#__PURE__*/React.createElement("i", {
        className: "material-icons",
        key: "star-".concat(num)
      }, "star");
    } else if (rating == num - 0.5) {
      return /*#__PURE__*/React.createElement("i", {
        className: "material-icons",
        key: "star-".concat(num)
      }, "star_half");
    } else {
      return /*#__PURE__*/React.createElement("i", {
        className: "material-icons",
        key: "star-".concat(num)
      }, "star_border");
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 col-md-auto mb-2"
  }, rating, " | ", usage))), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, props.course.caption))), /*#__PURE__*/React.createElement("footer", {
    className: "card-footer col-12 col-md-6 col-lg-12 col-xl-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    className: "topics"
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, "Topics"), /*#__PURE__*/React.createElement("td", {
    className: "topics-list"
  }, topicsList.map(function (topic, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, !!index && ', ', /*#__PURE__*/React.createElement("a", {
      key: "topic-".concat(index),
      className: "topic",
      href: ""
    }, topic));
  }))), /*#__PURE__*/React.createElement("tr", {
    className: "provider"
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, t(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Provider"])))), /*#__PURE__*/React.createElement("td", null, props.course.provider)), props.course.platform && /*#__PURE__*/React.createElement("tr", {
    className: "platform"
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, t(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Platform"])))), /*#__PURE__*/React.createElement("td", {
    colspan: "2"
  }, props.course.platform)), /*#__PURE__*/React.createElement("tr", {
    className: "website"
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, t(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Website"])))), /*#__PURE__*/React.createElement("td", {
    colspan: "2"
  }, /*#__PURE__*/React.createElement("a", {
    href: props.course.link,
    rel: "nofollow",
    target: "_blank"
  }, props.course.link))), /*#__PURE__*/React.createElement("tr", {
    className: "platform"
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, t(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Access"])))), /*#__PURE__*/React.createElement("td", {
    colspan: "2"
  }, availability))))), /*#__PURE__*/React.createElement("div", {
    className: "row justify-content-center justify-content-md-end"
  }, moreInfo && /*#__PURE__*/React.createElement("a", {
    href: props.course.course_page_url,
    className: "btn p2pu-btn btn-sm secondary gray col-sm-auto m-2"
  }, t(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["More details"])))), courseLink && /*#__PURE__*/React.createElement("a", {
    href: props.course.link,
    className: "btn p2pu-btn btn-sm gray col-sm-auto m-2"
  }, "Use this course"), props.onSelectResult && /*#__PURE__*/React.createElement("a", {
    className: "btn p2pu-btn btn-sm gray col-sm-auto m-2",
    onClick: function onClick() {
      return props.onSelectResult(props.course);
    }
  }, props.buttonText)))));
};

export default CourseCard;
//# sourceMappingURL=CourseCard.js.map