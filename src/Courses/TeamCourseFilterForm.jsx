import React from 'react'

const TeamCourseFilterForm = (props) => {
  if (!props.teamCourseList)
    return null;

  const handleChange = (event) => {
    props.updateQueryParams({team: event.currentTarget.checked});
  }

  return (
    <form className="filter">
      <div className="input-group">
        <div className="form-check">
          <input 
            className="form-check-input"
            id="team-input"
            name="team"
            type="checkbox"
            checked={Boolean(props.team)}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="team-input">Limit to courses suggested for your team?</label>
        </div>
      </div>
    </form>
  );
}

export default TeamCourseFilterForm
