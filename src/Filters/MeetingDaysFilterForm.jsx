import React, { Component } from 'react'
import { pull } from 'lodash'

import { CheckboxWithLabel } from 'p2pu-input-fields'
import { MEETING_DAYS } from '../utils/constants'

export default class MeetingDaysFilterForm extends Component {
  constructor(props) {
    super(props)
    this.generateChangeHandler = (day) => this._generateChangeHandler(day);
  }

  _generateChangeHandler(dayIndex) {
    return (checked) => {
      let newWeekdayList = this.props.weekdays || [];

      if (checked) {
        newWeekdayList.push(dayIndex)
      } else {
        newWeekdayList = pull(newWeekdayList, dayIndex);
      }

      this.props.updateQueryParams({ weekdays: newWeekdayList})
    }
  }

  render() {
    return(
      <div>
        {
          MEETING_DAYS.map((day, index) => {
            const checked = this.props.weekdays && (this.props.weekdays.indexOf(index) !== -1);
            return(
              <CheckboxWithLabel
                key={index}
                classes='col-sm-12 col-md-6 col-lg-6'
                name={day}
                value={index}
                label={day}
                checked={checked}
                handleChange={this.generateChangeHandler(index)}
              />
            )
          })
        }
      </div>
    )
  }
}
