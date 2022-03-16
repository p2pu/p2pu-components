import React from 'react'
import { t } from "ttag";
import { Card, CardTitle, CardBody } from '../Card';
import { COLOR_CLASSES } from '../utils/constants';
import { date, day, time } from '../utils/i18n';

const cardFormatting = {
  'upcoming': {
    color: 'p2pu-blue',
    label: 'Starting soon',
    class: 'starting-soon',
  },
  'in_progress': {
    color: 'p2pu-green',
    label: 'In progress',
    class: 'in-progress',
  },
  'closed': {
    color: 'p2pu-yellow',
    label: 'Sign up closed',
    class: 'signup-closed',
  },
  'completed': {
    color: 'p2pu-gray',
    label: 'Completed',
    class: 'closed',
  }
}

const LearningCircleCard = (props) => {
  const { learningCircle, locale, onSelectResult } = props;
  const formattedStartDate = date(learningCircle.start_date, locale);
  const formattedStartTime = time(learningCircle.meeting_time);
  const formattedEndDate = date(learningCircle.last_meeting_date, locale);
  const formattedEndTime = time(learningCircle.end_time);
  const weekDay = day(learningCircle.day);

  const schedule = learningCircle.meets_weekly ? t`${weekDay} from ${formattedStartTime} to ${formattedEndTime} (${learningCircle.time_zone})` : t`${formattedStartTime} to ${formattedEndTime} (${learningCircle.time_zone})`;
  const frequency = learningCircle.meets_weekly ? t`${learningCircle.weeks} weeks starting ${formattedStartDate}` : t`${learningCircle.weeks} meetings starting ${formattedStartDate}`;
  const name = learningCircle.name ? learningCircle.name : learningCircle.course.title;

  const isSignupOpen = props.isSignupOpen
  const today = new Date()
  const startDate = new Date(learningCircle.start_date)
  const endDate = new Date(learningCircle.last_meeting_date)

  const isUpcoming = startDate > today
  const isCompleted = endDate < today
  const isInProgress = startDate < today && endDate > today

  const status = learningCircle.status || 'completed'
  const colorClass = cardFormatting[status].color
  const cardLabel = cardFormatting[status].label

  let dateLabel = t`Ended ${formattedEndDate}`
  if (status === 'in_progress' || status === 'closed') {
    dateLabel = t`Started ${formattedStartDate}`
  } else if (status === 'upcoming') {
    dateLabel = t`Starting ${formattedStartDate}`
  }

  const onClick = (e) => {
    e.preventDefault();
    if (onSelectResult) {
      onSelectResult(learningCircle)
    } else {
      window.location.href = learningCircle.url;
    }
  }
  let imageUrl = props.defaultImageUrl;
  if (learningCircle.image_url){
    imageUrl = learningCircle.image_url;
  }

  return (
    <div className="result-item grid-item col-md-6 col-lg-4" >
      <a className="learning-circle-card-link" href={learningCircle.url} onClick={onClick} >
        <div className={`card learning-circle ${cardFormatting[status].class}`}>
          <div className="status-tag"><span>{t(cardLabel)}</span></div>
          <div className="card-image">
            <img src={imageUrl} alt={name} className="card-img-top" />
          </div>
          <div className="card-header">
            <span className="eyebrow">{dateLabel}</span>
            <h3 className="card-title">{name}</h3>
          </div>
          <div className="card-body">
            <span className="schedule">
              <i className="material-icons">schedule</i>
              { schedule }
            </span>
            <span className="duration">
              <i className="material-icons">today</i>{ frequency }
            </span>
            <span className="city-country">
              <i className="material-icons">place</i>
              {learningCircle.city}
            </span>
            <span className="facilitator">
              <i className="material-icons">face</i>
              {t`Facilitated by ${learningCircle.facilitator}`}
            </span>
            <span className="location">
              <i className="material-icons">store</i>
              {t`Meeting at ${learningCircle.venue}`}
            </span>
          </div>
          <div className="card-footer">
            <button className="btn p2pu-btn btn-sm gray mx-auto d-block">
              {isSignupOpen ? t`Sign up` : t`View details`}
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default LearningCircleCard
