import React, { useState } from 'react';
import {t} from 'ttag';

import SearchBar from "../Search/SearchBar";
import SearchTags from "../Search/SearchTags";
import LocationFilter from './LocationFilter';
import BrowseLearningCircles from "./Browse";
import DefaultNoResults from "../Search/DefaultNoResults";


const LearningCircleSearch = (props) => {

  return (
    <>
      <div className="search-fields row g-0">
        <div className="bg-white shadow col-12 col-lg me-lg-2">
          <SearchBar 
            placeholder={t`####Keyword, organization, facilitator, etc...`}
            {...props} 
          />
        </div>
        <div className="bg-green shadow col-12 col-lg-7">
          <LocationFilter {...props} />
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
