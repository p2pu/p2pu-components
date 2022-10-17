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
        inputId="order-input"
        aria-label="Default select example"
        placeholder="Order by popularity, rating, etc."
        options={COURSES_SORT_OPTIONS}
        value={props.order || COURSES_SORT_OPTIONS[0].value}
        handleChange={handleChange}
      >
      </Select>
    </form>
  )
}

export default OrderCoursesForm;
