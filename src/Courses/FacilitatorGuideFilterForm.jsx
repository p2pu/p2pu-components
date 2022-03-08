import React from 'react'
import { t } from 'ttag';

const FacilitatorGuideFilterForm = (props) => {
  const handleChange = (event) => {
    props.updateQueryParams({facilitator_guide: event.currentTarget.checked});
  }

  return (
    <form className="search">
      <label for="search-input" className="form-label">{t`Facilitator guides`}</label>
      <div className="input-group">
        <div className="form-check">
          <input 
            className="form-check-input"
            type="checkbox"
            id="facilitator_guide"
            name="facilitator_guide"
            checked={Boolean(props.facilitator_guide)}
            onChange={handleChange}
          />
          <label className="form-check-label" for="facilitator_guide">{t`Only show courses with facilitator guides`}</label>
        </div>
      </div>
    </form>
  )
}

export default FacilitatorGuideFilterForm;
