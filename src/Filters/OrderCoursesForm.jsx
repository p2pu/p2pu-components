import React from 'react'

import {t} from 'ttag';

import SwitchWithLabels from '../InputFields/SwitchWithLabels'
import { COURSES_SORT_OPTIONS } from '../utils/constants'


const OrderCoursesForm = (props) => {

  const handleChange = event => {
    const order = event.target.value;
    props.updateQueryParams({ order })
    props.closeFilter()
  }

  return(
    <form className="filter">
      <label htmlFor="order-input" className="form-label">{t`Order By`}</label>
      <div className="input-group">
        <select 
          className="form-select form-control"
          aria-label="Default select example"
          placeholder="Order by popularity, rating, etc."
          onChange={handleChange}
          value={props.order}
        >
          { 
            COURSES_SORT_OPTIONS.map( option => 
              <option 
                value={option.value}
              >{option.label}</option> 
            )          
          }
        </select>
      </div>
    </form>
  )
}

export default OrderCoursesForm;
