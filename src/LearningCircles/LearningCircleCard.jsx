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

  const onClick = () => {
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
    <div class="result-item grid-item col-md-6 col-lg-4" onClick={onClick}>
      <div class={`card learning-circle ${cardFormatting[status].class}`}>
        <div class="status-tag"><span>{t(cardLabel)}</span></div>
        <div class="card-image">
          <img src={imageUrl} alt={name} class="card-img-top" />
        </div>
        <div class="card-header">
          <span class="eyebrow">{dateLabel}</span>
          <h3 class="card-title">{name}</h3>
        </div>
        <div class="card-body">
          <span class="schedule">
            <i class="material-icons">schedule</i>
            { schedule }
          </span>
          <span class="duration">
            <i class="material-icons">today</i>{ frequency }
          </span>
          <span class="city-country">
            <i class="material-icons">place</i>
            {learningCircle.city}
          </span>
          <span class="facilitator">
            <i class="material-icons">face</i>
            {t`Facilitated by ${learningCircle.facilitator}`}
          </span>
          <span class="location">
            <i class="material-icons">store</i>
            {t`Meeting at ${learningCircle.venue}`}
          </span>
        </div>
        <div class="card-footer">
          <button class="btn p2pu-btn btn-sm gray mx-auto d-block">
            {isSignupOpen ? t`Sign up` : t`View details`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LearningCircleCard
