import React, { useState } from 'react';
import { render } from 'react-dom';

import SearchProvider from "../../src/Search/SearchProvider";
import LearningCircleSearch from "../../src/LearningCircles/LearningCircleSearch";
import LearningCircleSignup from "../../src/LearningCircleSignup/LearningCircleSignup";

import "../../src/stylesheets/search.scss"
import "p2pu-theme/src/scss/base.scss"


const App = () => {
  const [selectedLearningCircle, setSelectedLearningCircle] = useState();

  const handleLearningCircleSelection = (learningCircle) => {
    console.log(`Clicked on ${learningCircle.url}`);
    setSelectedLearningCircle(learningCircle);
  }

  const handleSignupDialogClose = (learningCircle) => {
    setSelectedLearningCircle(null);
  }

  return (
    <div style={{ padding: "20px"}}>
      {
        selectedLearningCircle &&
          <LearningCircleSignup
            onCancel={handleSignupDialogClose}
            learningCircle={selectedLearningCircle}
            signUpUrl='https://learningcircles.p2pu.org/api/signup/'
          />
      }
      <div className={selectedLearningCircle?'d-none':''}>
        <SearchProvider 
          searchSubject={'learningCircles'}
          origin="https://learningcircles.p2pu.org"
          locale="en"
        >
          <LearningCircleSearch
            onSelectResult={handleLearningCircleSelection}
            contact="sharon@p2pu.org"
            defaultImageUrl="/lc-default.jpg"
          />
        </SearchProvider>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
