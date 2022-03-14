import React, { Component } from 'react'
import { t } from 'ttag';

import { OPEN_TAB_TEXT, CLOSED_TAB_TEXT } from '../utils/constants'

const DefaultNoResults = props => {
  const renderLinks = () => {
    const links = []
    if (props.updateResultsTab) {
      const otherTab = props.tabIndex === 0 ? 1 : 0
      const otherTabName = otherTab === 0 ? OPEN_TAB_TEXT : CLOSED_TAB_TEXT
      links.push(
        <button key="reset-btn" className='btn p2pu-btn btn-sm dark d-inline-flex align-items-center py-2 px-3' onClick={() => props.updateResultsTab(otherTab)}>
          <span className="material-icons mr-1">
            arrow_forward
          </span>
          {t`View ${otherTabName} learning circles`}
        </button>
      )
    }

    if (props.contact) {
      links.push(
        <a key="contact-btn" href={`mailto:${props.contact}`} className='btn p2pu-btn btn-sm dark d-inline-flex align-items-center py-2 px-3'>
          <span className="material-icons mr-1">
            alternate_email
          </span>
          {t`Contact this team`}
        </a>
      )
    }

    return links
  }

  return (
    <div className="my-4">
      <p>{t`There are no learning circles available right now.`}</p>
      { renderLinks() }
    </div>
  )
}

export default DefaultNoResults;
