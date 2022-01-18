import React from 'react';
import { t } from "ttag";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { OPEN_TAB_TEXT, CLOSED_TAB_TEXT } from '../utils/constants';
import LearningCircleCard from './LearningCircleCard.jsx';
import 'react-tabs/style/react-tabs.css';

var BrowseLearningCircles = function BrowseLearningCircles(props) {
  var results = props.results,
      onSelectResult = props.onSelectResult,
      locale = props.locale,
      columnBreakpoints = props.columnBreakpoints,
      resultsCount = props.resultsCount,
      signupOpenCount = props.signupOpenCount,
      signupClosedCount = props.signupClosedCount,
      resultsTab = props.resultsTab,
      updateResultsTab = props.updateResultsTab,
      NoResultsComponent = props.NoResultsComponent,
      showNoResultsComponent = props.showNoResultsComponent,
      contact = props.contact,
      isLoading = props.isLoading;
  return /*#__PURE__*/React.createElement(Tabs, {
    selectedIndex: resultsTab,
    onSelect: updateResultsTab
  }, /*#__PURE__*/React.createElement(TabList, null, /*#__PURE__*/React.createElement(Tab, null, /*#__PURE__*/React.createElement("span", {
    className: "minicaps bold text-xs"
  }, "".concat(OPEN_TAB_TEXT, " (").concat(signupOpenCount, ")"))), /*#__PURE__*/React.createElement(Tab, null, /*#__PURE__*/React.createElement("span", {
    className: "minicaps bold text-xs"
  }, "".concat(CLOSED_TAB_TEXT, " (").concat(signupClosedCount, ")")))), /*#__PURE__*/React.createElement(TabPanel, null, !isLoading && results.length === 0 ? /*#__PURE__*/React.createElement(NoResultsComponent, {
    updateResultsTab: updateResultsTab,
    tabIndex: resultsTab,
    contact: contact
  }) : /*#__PURE__*/React.createElement("div", {
    className: "search-results row grid"
  }, results.map(function (circle, index) {
    return /*#__PURE__*/React.createElement(LearningCircleCard, {
      key: "learning-circle-".concat(index),
      learningCircle: circle,
      locale: locale,
      classes: "col-md-4 col-md-4 my-3",
      onSelectResult: onSelectResult,
      isSignupOpen: true,
      defaultImageUrl: props.defaultImageUrl
    });
  }))), /*#__PURE__*/React.createElement(TabPanel, null, !isLoading && results.length === 0 ? /*#__PURE__*/React.createElement(NoResultsComponent, {
    updateResultsTab: updateResultsTab,
    tabIndex: resultsTab,
    contact: contact
  }) : /*#__PURE__*/React.createElement("div", {
    className: "search-results row grid"
  }, results.map(function (circle, index) {
    return /*#__PURE__*/React.createElement(LearningCircleCard, {
      key: "learning-circle-".concat(index),
      learningCircle: circle,
      locale: locale,
      classes: "col-md-4 my-4",
      onSelectResult: onSelectResult,
      isSignupOpen: false,
      defaultImageUrl: props.defaultImageUrl
    });
  }))));
};

BrowseLearningCircles.defaultProps = {
  results: [],
  signupOpenCount: 0,
  signupClosedCount: 0,
  resultsCount: 0
};
export default BrowseLearningCircles;