import React from 'react';
import { render } from 'react-dom';

import Search from "../../src/Search/Search";
import SearchProvider from "../../src/Search/SearchProvider";
import BrowseCourses from "../../src/Courses/Browse";
import BrowseLearningCircles from "../../src/LearningCircles/Browse";

import "../../src/stylesheets/search.scss"
import "p2pu-theme/src/scss/base.scss"


class App extends React.Component {

  render() {
    const handleSelectResult = (props) => {
      console.log(props)
    }

    return(
    <div style={{ padding: "20px"}}>
      <SearchProvider
        searchSubject={'courses'}
        Browse={BrowseCourses}
        onSelectResult={handleSelectResult}
        initialState={{ languages: ['en'] }}
        origin={'https://learningcircles.p2pu.org'}
      >
        <Search />
      </SearchProvider>
    </div>
    );
  }
}

render(<App />, document.getElementById("root"));
