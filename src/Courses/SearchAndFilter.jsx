import React from 'react'

import SearchBar from '../Search/SearchBar'
import OrderCoursesForm from '../Filters/OrderCoursesForm'
import TopicsFilterForm from '../Filters/TopicsFilterForm'
import LanguageFilterForm from '../Filters/LanguageFilterForm'
import OerFilterForm from '../Filters/OerFilterForm'
import FacilitatorGuideFilterForm from '../Filters/FacilitatorGuideFilterForm'

const SearchAndFilter = (props) => {
  return (
    <nav class="navbar-expand-lg">

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#course-filters" aria-controls="course-filters">
        <span class="material-icons">filter_list</span>
      </button>

      <div class="offcanvas offcanvas-start filters wrap pe-lg-3 pe-xl-4" tabindex="-1" id="course-filters" aria-labelledby="filters-label">

        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="filters-label">Filter Courses</h3>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="filter-fields row g-0 offcanvas-body">

          <div class="col-12">
            <SearchBar
              placeholder={props.placeholder}
              updateQueryParams={props.updateQueryParams}
              q={props.q}
            />
          </div>

          <div class="col-12">
            <OrderCoursesForm {...props} />
          </div>

          <div class="col-12">
            <TopicsFilterForm {...props} />
          </div>

          <div class="col-12">
            <LanguageFilterForm {...props} />
          </div>

          <div class="col-12">
            <FacilitatorGuideFilterForm {...props} />
          </div>

          <div class="col-12">
            <OerFilterForm {...props} />
          </div>
        </div>
      </div>

    </nav>

  )
}

export default SearchAndFilter;
