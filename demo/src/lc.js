import React, { useState } from 'react';
import { render } from 'react-dom';

import Search from "../../src/Search/Search";
import SearchProvider from "../../src/Search/SearchProvider";
import BrowseLearningCircles from "../../src/LearningCircles/Browse";
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
          locale="en"
          onSelectResult={handleLearningCircleSelection}
          Browse={BrowseLearningCircles}
          contact="sharon@p2pu.org"
          origin="https://learningcircles.p2pu.org"
          defaultImageUrl="/lc-default.jpg"
        >
          <Search/>
        </SearchProvider>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
