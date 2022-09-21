import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

import { t } from 'ttag';
export var MEETING_DAYS = [t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Monday"]))), t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Tuesday"]))), t(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Wednesday"]))), t(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Thursday"]))), t(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Friday"]))), t(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Saturday"]))), t(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Sunday"])))];
export var COURSES_SORT_OPTIONS = [{
  label: t(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Course title"]))),
  value: 'title'
}, {
  label: t(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Popularity"]))),
  value: 'usage'
}, {
  label: t(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Community rating"]))),
  value: 'overall_rating'
}, {
  label: t(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Recently added"]))),
  value: 'created_at'
}];
export var SEARCH_SUBJECTS = {
  learningCircles: 'learning circles',
  courses: 'courses'
};
export var SEARCH_PROPS = {
  learningCircles: {
    filters: ['location'],
    placeholder: t(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Keyword, organization, facilitator, etc..."]))) //remove?

  },
  courses: {
    filters: ['topics', 'language', 'oer'],
    //facilitator_guide?
    sort: ['orderCourses'],
    placeholder: t(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Title, subject, etc..."])))
  }
};
export var DEFAULT_ORIGIN = 'https://learningcircles.p2pu.org'; // export const DEFAULT_ORIGIN = 'http://localhost:8000'

export var API_ENDPOINTS = {
  learningCircle: "/api/learning-circle/",
  registration: "/en/accounts/fe/register/",
  login: "/en/accounts/fe/login/",
  learningCircles: {
    postUrl: "/api/learning-circle/",
    baseUrl: "/api/learningcircles/?",
    searchParams: ['q', 'topics', 'weekdays', 'latitude', 'longitude', 'distance', 'active', 'limit', 'offset', 'city', 'signup', 'team_id', 'order', 'cu_credit', 'online'],
    arrayItems: ['topics', 'weekdays'],
    privateParams: ['limit', 'offset', 'active', 'distance', 'latitude', 'longitude']
  },
  courses: {
    baseUrl: "/api/courses/?",
    searchParams: ['q', 'topics', 'order', 'limit', 'offset', 'languages', 'oer', 'facilitator_guide'],
    arrayItems: ['topics', 'languages'],
    privateParams: ['limit', 'offset']
  },
  coursesTopics: {
    baseUrl: "/api/courses/topics/?",
    searchParams: []
  },
  coursesLanguages: {
    baseUrl: "/api/courses/languages/?",
    searchParams: []
  },
  stats: {
    baseUrl: "/api/landing-page-stats/?",
    searchParams: []
  },
  landingPage: {
    baseUrl: "/api/landing-page-learning-circles/?",
    searchParams: []
  },
  whoami: {
    baseUrl: "/en/accounts/fe/whoami/"
  },
  images: {
    postUrl: "/api/upload_image/"
  }
};
export var COLOR_CLASSES = ["p2pu-green", "p2pu-blue", "p2pu-yellow", "p2pu-orange"];
export var OPEN_TAB_TEXT = t(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Open"])));
export var CLOSED_TAB_TEXT = t(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Closed and completed"])));
//# sourceMappingURL=constants.js.map