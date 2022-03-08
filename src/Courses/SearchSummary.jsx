import React, { Component } from 'react'
import { t, jt, ngettext, msgid } from 'ttag';

const SearchSummary = (props) => {

  const reloadWindow = () => {
    if (typeof window !== `undefined`) {
      window.history.replaceState({}, document.title, window.location.pathname)
      window.location.reload()
    }
  }

  const noResults = props.searchResults.length === 0;
  const resetButton = <button key="reset-search" onClick={reloadWindow} className='p2pu-btn light with-outline'>{t`reset the search form`}</button>;


  return(
    <div className='results-summary'>
      <div className='search-tags wrapper'>
        <span key='resultsSummary-0'>
          {
            ngettext(
              msgid`Showing ${props.searchResults.length} of ${props.totalResults} result`,
              `Showing ${props.searchResults.length} of ${props.totalResults} results`,
              props.totalResults
            )
          }
        </span>
      </div>
      { noResults &&
      <div className='clear-search'>
        {jt`To see more results, either remove some filters or ${resetButton}`}
      </div>
      }
    </div>
  )
}

export default SearchSummary;
