import React, { Fragment } from 'react'
import { t, jt, ngettext, msgid } from 'ttag';

import { COLOR_CLASSES } from '../utils/constants';

const CourseCard = (props) => {
  const {
    courseLink = false,
    moreInfo = true,
  } = props;

  const availability = props.course.on_demand ? t`Always available` : t`Check availability`;
  const handleFilterClick = topic => {
    return (event) => {
      event.preventDefault()
      props.updateQueryParams({ topics: [topic] })
    }
  };
  const topicsList = props.course.topics.slice(0, 5).map( topic => {
    return <a className='topic' onClick={handleFilterClick(topic)} href={""}>{topic}</a>
  });
  const colorClass = COLOR_CLASSES[(props.course.id % COLOR_CLASSES.length)];

  const rating_number = props.course.total_ratings;
  let rating = jt`${rating_number} ratings`;
  if (props.course.total_ratings == 1){
    rating = jt`${rating_number} rating`;
  }

  let usage_number = props.course.learning_circles;
  let usage = jt`Used in ${usage_number} learning circles`;
  if (props.course.learning_circles == 1){
    usage = jt`Used in ${usage_number} learning circle`;
  }

  return (
    <div className="card col-12 course horizontal in-progress">
      <div className="row g-0">
        <div className="col-12 col-md-6 col-lg-12 col-xl-7">
          <div className="card-header">
            <h3 className="card-title">{ props.course.title }</h3>
            <div className="lowbrow row">
              <div className="stars mb-2 pe-md-0 d-flex col-12 col-md-auto">
                { [1,2,3,4,5].map(num => {
                  const rating = Math.round(props.course.overall_rating * 2)/2;
                  if (rating >= num) {
                    return <i className="material-icons" key={`star-${num}`}>star</i>
                  } else if (rating == num - 0.5) {
                    return <i className="material-icons" key={`star-${num}`}>star_half</i>
                  } else {
                    return <i className="material-icons" key={`star-${num}`}>star_border</i>
                  }
                })}
              </div>
              <div className="col-12 col-md-auto mb-2">{rating} | {usage}</div>
            </div>
          </div>
          
          <div className="card-body">
            <p className="card-text">{props.course.caption}</p>
          </div>
        </div>
    
        <footer className="card-footer col-12 col-md-6 col-lg-12 col-xl-5">
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr className="border-top-0">
                  <th scope="row">{t`Creator`}</th>
                  <td>{props.course.creator}</td>
                </tr>
                <tr>
                  <th scope="row">{t`Format`}</th>
                  <td colSpan="2">{props.course.format }</td>
                </tr>
                <tr className="website">
                 <th scope="row">{t`Website`}</th>
                  <td colSpan="2">
                    <a href={props.course.link} rel="nofollow" target="_blank">{props.course.link}</a>
                  </td>
                </tr>
                { !!props.course.topics.length && 
                  <tr className="topics">
                    <th scope="row">Topics</th>
                    <td className="topics-list">
                      { topicsList.map((topic, index) => 
                          <React.Fragment key={`${index}-topic`} >
                            {!!index && ', '}{topic}
                          </React.Fragment>
                      )}
                    </td>
                  </tr>
                }
                <tr>
                  <th scope="row">{t`Language`}</th>
                  <td colSpan="2">{props.course.language_display }</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row justify-content-center justify-content-md-end">
            {
              moreInfo &&
                <a href={props.course.course_page_url} className="btn p2pu-btn btn-sm secondary gray col-sm-auto m-2">{t`More details`}</a>
            }
            {
              courseLink &&
                <a href={props.course.link} className="btn p2pu-btn btn-sm gray col-sm-auto m-2">Use this course</a>
            }
            { 
              props.onSelectResult &&
                <a className="btn p2pu-btn btn-sm gray col-sm-auto m-2" onClick={() => props.onSelectResult(props.course)}>{props.buttonText}</a>
            }
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CourseCard
