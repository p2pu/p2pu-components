import React from 'react'
import { t } from 'ttag';
import SwitchWithLabels from '../InputFields/SwitchWithLabels'


const OerFilterForm = (props) => {
  const formValues = {
    true: t`Only open educational resources (OER)`,
    false: t`All courses`
  }

  const handleChange = (event) => {
    props.updateQueryParams({oer: event.currentTarget.checked});
  }

  return (
    <>
      <form class="search">
        <label for="search-input" class="form-label">OER mode</label>
        <div className="input-group">
          <div className="form-check">
            <input 
              className="form-check-input"
              name="oer"
              type="checkbox"
              id="online"
              checked={Boolean(props.oer)}
              onChange={handleChange}
            />
            <label className="form-check-label" for="oer">Only show open educational resources (OER)</label>
          </div>
        </div>
      </form>
    </>
  )
}

export default OerFilterForm;
