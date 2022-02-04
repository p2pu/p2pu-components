import React from 'react'
import { t } from 'ttag';
import SwitchWithLabels from '../InputFields/SwitchWithLabels'


const FacilitatorGuideFilterForm = (props) => {
  const formValues = {
    true: t`Only open educational resources (OER)`,
    false: t`All courses`
  }

  const handleChange = (event) => {
    props.updateQueryParams({facilitator_guide: event.currentTarget.checked});
  }

  return (
    <>
      <form className="search">
        <label for="search-input" className="form-label">Facilitator guides</label>
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
            <label className="form-check-label" for="facilitator_guide">Courses with facilitator guides</label>
          </div>
        </div>
      </form>
    </>
  )
}

export default FacilitatorGuideFilterForm;
