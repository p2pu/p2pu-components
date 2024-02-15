import React from 'react'
import CourseCard from './CourseCard'
import { t } from 'ttag';

class BrowseCourses extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { results, updateQueryParams, onSelectResult, columnBreakpoints, isLoading } = this.props;

    return (
      <div className="search-results" aria-live="polite" aria-busy={isLoading}>
        {
          results.map((course, index) => (
            <CourseCard
              key={`course-card-${index}`}
              id={`course-card-${index}`}
              course={course}
              updateQueryParams={updateQueryParams}
              courseLink={this.props.courseLink}
              moreInfo={this.props.moreInfo}
              onSelectResult={onSelectResult}
              buttonText={t`Use this course`}
              classes="mb-4"
            />
          ))
        }
        { isLoading && <div className="loader"></div> }
      </div>
    );
  }
}

export default BrowseCourses
