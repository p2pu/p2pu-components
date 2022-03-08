import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import TopicsFilterForm from '../Courses/TopicsFilterForm'
import OrderCoursesForm from '../Courses/OrderCoursesForm'
import LanguageFilterForm from '../Courses/LanguageFilterForm'
import OerFilterForm from '../Courses/OerFilterForm'
import LocationFilterForm from './LocationFilterForm'


const FilterForm = (props) => {
  const closeFilter = () => { props.updateActiveFilter(null) };
  const openClass = props.activeFilter ? 'open' : '';

  const internalForm = () => {
    switch (props.activeFilter) {
      case 'topics':
      return <TopicsFilterForm {...props} />;
      case 'language':
      return <LanguageFilterForm {...props} closeFilter={closeFilter} />;
      case 'orderCourses':
      return <OrderCoursesForm { ...props} closeFilter={closeFilter} />;
      case 'location':
      return <LocationFilterForm { ...props} closeFilter={closeFilter} />;
      case 'oer':
      return <OerFilterForm { ...props} closeFilter={closeFilter} />;
    }
  }

  return(
    <OutsideClickHandler onOutsideClick={closeFilter}>
      <div className={`filter-form-dropdown ${openClass}`}>
        <div className='close' style={{ textAlign: 'right', float: 'none', cursor: 'pointer' }}>
          <i className="material-icons" onClick={closeFilter}>close</i>
        </div>
        {internalForm()}
      </div>
    </OutsideClickHandler>
  )
}

export default FilterForm;
