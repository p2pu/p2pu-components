import React, { useState } from 'react';

import SearchBar from "../Search/SearchBar";
import SearchTags from "../Search/SearchTags";
import LearningCircleFilters from "./Filters";
import BrowseLearningCircles from "./Browse";
import DefaultNoResults from "../Search/DefaultNoResults";


const LearningCircleSearch = (props) => {

  return (
    <>
      <div className="search-fields row g-0">
        <div className="bg-white shadow col-12 col-lg me-lg-2">
          <SearchBar {...props} />
        </div>
        <div className="bg-white shadow col-12 col-lg-7">
          <LearningCircleFilters {...props} />
        </div>
      </div>
      <SearchTags {...props} />
      <BrowseLearningCircles
        {...props}
        NoResultsComponent={DefaultNoResults}
      />
    </>
  );
}

export default LearningCircleSearch;
