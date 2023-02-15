import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
import { t } from 'ttag';
var WEEK_DAYS = {
  Monday: t(_templateObject || (_templateObject = _taggedTemplateLiteral(["Monday"]))),
  Tuesday: t(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Tuesday"]))),
  Wednesday: t(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Wednesday"]))),
  Thursday: t(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Thursday"]))),
  Friday: t(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Friday"]))),
  Saturday: t(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Saturday"]))),
  Sunday: t(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Sunday"])))
};
export function day(day_) {
  if (WEEK_DAYS.hasOwnProperty(day_)) {
    return WEEK_DAYS[day_];
  }
  return day_;
}
;

/* Convert a date (YYYY-MM-DD) to the locale format */
export function date(date_) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  // Since a date without a time will be in UTC, the timeZone used for output should
  // also be UTC. If not specified, the timezone of the user will be used, iow, a meeting
  // late Monday evening EST would show as Tuesday in CEST.
  // TODO - this translation is dynamic, while the rest of the translation is static
  //      - it's baked in when webpack builds it
  var localDate = new Date(date_).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });
  return localDate;
}

/* takes time formatted as hh:mm:ss and outputs it without seconds in the locale format */
export function time(time_) {
  var _time_$split = time_.split(':'),
    _time_$split2 = _slicedToArray(_time_$split, 3),
    h = _time_$split2[0],
    m = _time_$split2[1],
    s = _time_$split2[2];
  var now = new Date();
  now.setHours(h);
  now.setMinutes(m);
  return now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  });
}
var LANGUAGES = {
  "en": {
    "name": "English",
    "nativeName": "English"
  },
  "fi": {
    "name": "Finnish",
    "nativeName": "suomi, suomen kieli"
  },
  "fr": {
    "name": "French",
    "nativeName": "français, langue française"
  },
  "de": {
    "name": "German",
    "nativeName": "Deutsch"
  },
  "pl": {
    "name": "Polish",
    "nativeName": "polski"
  },
  "pt": {
    "name": "Portuguese",
    "nativeName": "Português"
  },
  "ro": {
    "name": "Romanian, Moldavian, Moldovan",
    "nativeName": "română"
  },
  "es": {
    "name": "Spanish; Castilian",
    "nativeName": "español, castellano"
  }
};
export function isoCodeToLangName(code) {
  if (LANGUAGES.hasOwnProperty(code)) {
    return LANGUAGES[code].nativeName;
  }
  return code;
}
//# sourceMappingURL=i18n.js.map