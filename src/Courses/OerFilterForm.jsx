import React from 'react'
import { t } from 'ttag';
import SwitchWithLabels from '../InputFields/SwitchWithLabels'


const OerFilterForm = (props) => {

  const handleChange = (event) => {
    props.updateQueryParams({oer: event.currentTarget.checked});
  }

  return (
    <form className="filter">
      <label htmlFor="oer-input" className="form-label">OER mode</label>
      <div className="input-group">
        <div className="form-check">
          <input 
            className="form-check-input"
            id="oer-input"
            name="oer"
            type="checkbox"
            checked={Boolean(props.oer)}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="oer-input">Only show open educational resources (OER)</label>
        </div>
      </div>
    </form>
  )
}

export default OerFilterForm;
