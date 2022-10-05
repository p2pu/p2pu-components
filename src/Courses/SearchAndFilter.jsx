import React from 'react'

import SearchBar from '../Search/SearchBar'
import OrderCoursesForm from './OrderCoursesForm'
import TopicsFilterForm from './TopicsFilterForm'
import LanguageFilterForm from './LanguageFilterForm'
import OerFilterForm from './OerFilterForm'
import FacilitatorGuideFilterForm from './FacilitatorGuideFilterForm'

const SearchAndFilter = (props) => {
  return (
    <nav className="navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#course-filters" aria-controls="course-filters">
        <span className="material-icons">filter_list</span> Search and filter
      </button>
      <div className="offcanvas offcanvas-start filters wrap pe-lg-3 pe-xl-4" tabindex="-1" id="course-filters" aria-labelledby="filters-label">
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="filters-label">Filter Resources</h3>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="filter-fields row g-0 offcanvas-body">
          <div className="col-12">
            <SearchBar
              placeholder={props.placeholder}
              updateQueryParams={props.updateQueryParams}
              q={props.q}
            />
          </div>
          <div className="col-12 pt-3">
            <OrderCoursesForm {...props} />
          </div>
          <div className="col-12 pt-3">
            <TopicsFilterForm {...props} />
          </div>
          <div className="col-12 pt-3">
            <LanguageFilterForm {...props} />
          </div>
          <div className="col-12 pt-3">
            <FacilitatorGuideFilterForm {...props} />
          </div>
          <div className="col-12 pt-3">
            <OerFilterForm {...props} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SearchAndFilter;
