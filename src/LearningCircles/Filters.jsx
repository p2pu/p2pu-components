import React, { useState } from 'react';

import {CitySelectInput} from '../InputFields/CitySelect';

const LearningCircleFilters = (props) => {
  return (
    <form class="filter">
      <label for="search-input" class="form-label">Location</label>
      <div class="input-group-md">
        <span>Within</span>
        <select class="form-select" aria-label="Default select example">
          <option selected>1</option>
          <option value="1">5</option>
          <option value="2">10</option>
          <option value="3">25</option>
          <option value="4">50</option>
          <option value="5">100</option>
        </select>
        <span>miles of</span>
        <div className="form-control search-input my-2 my-md-0">
          <CitySelectInput />
        </div>
        <span class="current-location">
          <span class="material-icons">place </span>
          <span class="text-muted"> use current location</span>
        </span>
        <span>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="online" />
            <label class="form-check-label" for="online">online</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="in-person" />
            <label class="form-check-label" for="in-person">in person</label>
          </div>

        </span>
      </div>
    </form>
  );
}

export default LearningCircleFilters;
