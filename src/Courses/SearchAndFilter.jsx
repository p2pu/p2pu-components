import React from 'react'

import SearchBar from '../Search/SearchBar'
import OrderCoursesForm from '../Filters/OrderCoursesForm'
import TopicsFilterForm from '../Filters/TopicsFilterForm'
import LanguageFilterForm from '../Filters/LanguageFilterForm'

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
            <OrderCoursesForm {...props} />
          </div>

          <div class="col-12">
            <TopicsFilterForm {...props} />
          </div>

          <div class="col-12">
            <LanguageFilterForm {...props} />
          </div>

          <div class="col-12">

            <form class="search">
              <label for="search-input" class="form-label">Facilitator guides</label>
              <div class="input-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="online"/>
                  <label class="form-check-label" for="online">Courses with facilitator guides</label>
                </div>
              </div>
            </form>
            <form class="search">
              <label for="search-input" class="form-label">OER mode</label>
              <div class="input-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="online"/>
                  <label class="form-check-label" for="online">Only show open educational resources (OER)</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </nav>

  )
}

export default SearchAndFilter;
