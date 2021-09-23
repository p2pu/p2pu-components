import React, { Component } from 'react'
import { t } from 'ttag';

import SearchAndFilter from './SearchAndFilter'
import SearchTags from './SearchTags'
import DefaultNoResults from './DefaultNoResults'
import { SEARCH_PROPS, OPEN_TAB_TEXT, CLOSED_TAB_TEXT } from '../utils/constants'


export default class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const extraProps = {
      filterCollection: SEARCH_PROPS[this.props.searchSubject].filters,
      sortCollection: SEARCH_PROPS[this.props.searchSubject].sort,
    }

    const Browse = this.props.Browse;
    return(
      <>
        <SearchAndFilter
          placeholder= {SEARCH_PROPS[this.props.searchSubject].placeholder}
          {...extraProps}
          {...this.props}
        />
        <SearchTags
          {...this.props}
        />
        <Browse
          {...this.props}
        />
        {
          this.props.isLoading &&
          <div className="loader" />
        }
      </>
    )
  }
}

Search.defaultProps = {
  NoResultsComponent: (props) => <DefaultNoResults {...props} />
}
