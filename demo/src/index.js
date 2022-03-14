import React from 'react';
import { render } from 'react-dom';

import SearchProvider from "../../src/Search/SearchProvider";
import BrowseCourses from "../../src/Courses/Browse";
import SearchCourses from '../../src/Courses/SearchCourses'


import "../../src/stylesheets/search.scss"
import "p2pu-theme/src/scss/base.scss"


class App extends React.Component {

  render() {
    const handleSelectResult = (props) => {
      console.log(props)
    }

    return(
      <SearchProvider
        searchSubject={'courses'}
        onSelectResult={handleSelectResult}
        Browse={BrowseCourses}
        initialState={{ languages: ['en'] }}
        origin={'https://learningcircles.p2pu.org'}
      >
        <SearchCourses />
      </SearchProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
