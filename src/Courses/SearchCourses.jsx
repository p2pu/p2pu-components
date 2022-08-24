import React, { Component } from 'react'
import { t } from 'ttag';

import SearchAndFilter from '../Courses/SearchAndFilter'
import SearchSummary from './SearchSummary'
import DefaultNoResults from '../Search/DefaultNoResults'
import BrowseCourses from './Browse'
import { SEARCH_PROPS, OPEN_TAB_TEXT, CLOSED_TAB_TEXT } from '../utils/constants'


export default class SearchCourses extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="row">
        <div className="filter-sidebar sidebar sticky-top col-0 col-lg-4 col-xl-3">
          <SearchAndFilter
            placeholder= {SEARCH_PROPS[this.props.searchSubject].placeholder}
            {...this.props}
          />
        </div>
        <div className="col-12 col-lg-8 col-xl-9 ps-lg-3 ps-xl-4">
          <SearchSummary
            {...this.props}
          />
          <BrowseCourses
            {...this.props}
          />
          {
            this.props.isLoading &&
              <div className="loader" />
          }
        </div>
      </div>
    )
  }
}

SearchCourses.defaultProps = {
  NoResultsComponent: (props) => <DefaultNoResults {...props} />
}
