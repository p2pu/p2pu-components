import React, { Fragment } from 'react'
import { t, jt, ngettext, msgid } from 'ttag';

import { Card, CardTitle, CardBody } from '../Card';
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
    return <a className='tag' onClick={handleFilterClick(topic)} href={""}>{topic}</a>
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
                <tr className="topics">
                  <th scope="row">Topics</th>
                  <td className="topics-list">
                    { topicsList.map((topic, index) => <>
                          {!!index && ', '}
                          <a key={`topic-${index}`} className="topic" href="">{topic}</a>
                        </>
                      )
                    }
                  </td>
                </tr>
                <tr className="provider">
                  <th scope="row">{t`Provider`}</th>
                  <td>{props.course.provider}</td>
                </tr>
                { props.course.platform &&
                  <tr className="platform">
                    <th scope="row">{t`Platform`}</th>
                    <td colspan="2">{props.course.platform}</td>
                  </tr>
                }
                <tr className="website">
                 <th scope="row">{t`Website`}</th>
                  <td colspan="2">
                    <a href={props.course.link} target="_blank">{props.course.link}</a>
                  </td>
                </tr>
                <tr className="platform">
                  <th scope="row">{t`Access`}</th>
                  <td colspan="2">{availability }</td>
                </tr>
              </tbody>
            </table>
          </div>	
          <div className="row justify-content-center justify-content-md-end">
            {
              moreInfo &&
                <a target="_blank" href={props.course.course_page_url} className="btn p2pu-btn btn-sm secondary gray col-sm-auto m-2">{t`More details`}</a>
            }
            {
              courseLink &&
                <a href={props.course.link} className="btn p2pu-btn btn-sm gray col-sm-auto m-2">Use this course</a>
            }
            { 
              props.onSelectResult &&
                <a className="btn p2pu-btn btn-sm gray col-sm-auto m-2"  onClick={() => props.onSelectResult(props.course)}>{props.buttonText}</a>
            }
          </div>
        </footer>
      </div>
    </div>

  )

  return (
    <Card classes={`${props.classes}`} colorClass={colorClass} id={props.id}>
      <CardTitle>{ props.course.title }</CardTitle>
      <CardBody>
        <div className={`stars mb-2 ${props.course.total_ratings == 0 && 'disabled'}`}>
          { [1,2,3,4,5].map(num => {
            const rating = Math.round(props.course.overall_rating * 2)/2
            if (rating >= num) {
              return <i className="material-icons" key={`star-${num}`}>star</i>
            } else if (rating == num - 0.5) {
              return <i className="material-icons" key={`star-${num}`}>star_half</i>
            } else {
              return <i className="material-icons" key={`star-${num}`}>star_border</i>
            }
          })}
        </div>
        <div className="minicaps">{rating} | {usage}</div>
      </CardBody>

      <CardBody>
        <p className="caption">{ props.course.caption }</p>

        <div className="my-3">
          <div className="grid-wrapper">
            <div className="label">{t`Topics`}</div>
            <div>
              <span className='topics-list'>
                { topicsList.map((topic, index) => {
                  return <span key={`topic-${index}`}>{!!index && ', '}{topic}</span>
                })}
              </span>
            </div>

            <div className="label">{t`Provider`}</div>
            <div>{ props.course.provider }</div>

          { props.course.platform &&
            <Fragment>
              <div className="label">{t`Platform`}</div>
              <div>{ props.course.platform }</div>
            </Fragment>
          }

            <div className="label">{t`Access`}</div>
            <div>{ availability }</div>

          </div>
        </div>

        <div className='actions'>
          <div className="alt-cta">
            {
              moreInfo &&
                <a href={ props.course.course_page_url } target="_blank" className="p2pu-btn dark secondary">{t`More details`}</a>
            }
            {
              courseLink &&
                <a href={ props.course.link } target="_blank" className="p2pu-btn dark secondary">{t`Course website`}</a>
            }
            {
              props.onSelectResult &&
              <button onClick={() => props.onSelectResult(props.course)} className="p2pu-btn dark">{props.buttonText}</button>
            }
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CourseCard
