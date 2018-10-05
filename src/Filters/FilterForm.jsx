import React from 'react'
import TopicsFilterForm from './TopicsFilterForm'
import OrderCoursesForm from './OrderCoursesForm'
import LocationFilterForm from './LocationFilterForm'
import MeetingDaysFilterForm from './MeetingDaysFilterForm'

const FilterForm = (props) => {
  const closeFilter = () => { props.updateActiveFilter(null) };
  const openClass = props.activeFilter ? 'open' : '';

  const internalForm = () => {
    switch (props.activeFilter) {
      case 'topics':
      return <TopicsFilterForm {...props} />;
      case 'orderCourses':
      return <OrderCoursesForm { ...props} />;
      case 'location':
      return <LocationFilterForm { ...props} closeFilter={closeFilter} />;
      case 'meetingDays':
      return <MeetingDaysFilterForm { ...props} />;
    }
  }

  return(
    <div className={`filter-form-dropdown ${openClass}`}>
      <div className='close' style={{ textAlign: 'right', float: 'none' }}>
        <i className="material-icons" onClick={closeFilter}>close</i>
      </div>
      {internalForm()}
    </div>
  )
}

export default FilterForm;
