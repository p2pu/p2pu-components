import { t } from 'ttag';
export const MEETING_DAYS = [t`Monday`, t`Tuesday`, t`Wednesday`, t`Thursday`, t`Friday`, t`Saturday`, t`Sunday`];
export const COURSES_SORT_OPTIONS = [{
  label: t`Course title`,
  value: 'title'
}, {
  label: t`Popularity`,
  value: 'usage'
}, {
  label: t`Community rating`,
  value: 'overall_rating'
}, {
  label: t`Recently added`,
  value: 'created_at'
}];
export const SEARCH_SUBJECTS = {
  learningCircles: 'learning circles',
  courses: 'courses'
};
export const SEARCH_PROPS = {
  learningCircles: {
    filters: ['location', 'topics', 'meetingDays'],
    placeholder: t`Keyword, organization, facilitator, etc...`
  },
  courses: {
    filters: ['topics', 'language', 'oer'],
    sort: ['orderCourses'],
    placeholder: t`Title, subject, etc...`
  }
};
export const DEFAULT_ORIGIN = 'https://learningcircles.p2pu.org';
export const API_ENDPOINTS = {
  learningCircle: `/api/learning-circle/`,
  registration: `/en/accounts/fe/register/`,
  login: `/en/accounts/fe/login/`,
  learningCircles: {
    postUrl: `/api/learning-circle/`,
    baseUrl: `/api/learningcircles/?`,
    searchParams: ['q', 'topics', 'weekdays', 'latitude', 'longitude', 'distance', 'active', 'limit', 'offset', 'city', 'signup', 'team_id']
  },
  courses: {
    baseUrl: `/api/courses/?`,
    searchParams: ['q', 'topics', 'order', 'limit', 'offset', 'languages', 'oer']
  },
  learningCirclesTopics: {
    baseUrl: `/api/learningcircles/topics/?`,
    searchParams: []
  },
  coursesTopics: {
    baseUrl: `/api/courses/topics/?`,
    searchParams: []
  },
  coursesLanguages: {
    baseUrl: `/api/courses/languages/?`,
    searchParams: []
  },
  stats: {
    baseUrl: `/api/landing-page-stats/?`,
    searchParams: []
  },
  landingPage: {
    baseUrl: `/api/landing-page-learning-circles/?`,
    searchParams: []
  },
  whoami: {
    baseUrl: `/en/accounts/fe/whoami/`
  },
  images: {
    postUrl: `/api/upload_image/`
  }
};
export const COLOR_CLASSES = ["p2pu-green", "p2pu-blue", "p2pu-yellow", "p2pu-orange"];