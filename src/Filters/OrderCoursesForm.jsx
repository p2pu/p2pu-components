import React from 'react'

import {t} from 'ttag';

import { COURSES_SORT_OPTIONS } from '../utils/constants'
import Select from '../InputFields/Select';


const OrderCoursesForm = (props) => {

  const handleChange = ({ order }) => {
    props.updateQueryParams({ order })
  }

  return(
    <form className="filter">
      <label htmlFor="order-input" className="form-label">{t`Order By`}</label>
      <Select
        name="order"
        aria-label="Default select example"
        placeholder="Order by popularity, rating, etc."
        options={COURSES_SORT_OPTIONS}
        value={props.order || COURSES_SORT_OPTIONS[0].value}
        handleChange={handleChange}
      >
      </Select>
    </form>
  )

  return (
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
  )

}

export default OrderCoursesForm;
