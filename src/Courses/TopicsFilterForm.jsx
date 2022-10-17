import React, { Component } from 'react'
import ApiHelper from '../utils/apiHelper'
import { t } from 'ttag'
import Select from '../InputFields/Select';


export default class TopicsFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = { options: [] }
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    const resourceType = `${this.props.searchSubject}Topics`;
    const api = new ApiHelper(resourceType, this.props.origin);
    const params = {};
    const callback = (response) => {
      const options = this.mapArrayToSelectOptions(response.topics);
      this.setState({ options })
    }

    api.fetchResource({ params, callback })
  }

  onChange = ({topic}) => {
    let {topics = []} = this.props;
    if (topic) {
      this.props.updateQueryParams({topics: [...topics, topic]});
    }
  }

  removeTopic = (topic) => {
    this.props.updateQueryParams({topics: this.props.topics.filter(t => t != topic)});
  }

  mapArrayToSelectOptions = (topics) => {
    const topicArray = Object.keys(topics).sort()
    return topicArray.map((topic) => ({ value: topic, label: topics[topic] }))
  }

  render() {
    let {topics = []} = this.props;
    let options = this.state.options.filter( option => topics.indexOf(option.value) == -1);

    const topicDisplay = slug => {
      const display = this.state.options.filter(option => slug == option.value);
      if (display.length == 1)
        return display[0].label;
      return slug;
    };

    return(
      <>
        <form className="filter">
          <label htmlFor="topic-input" className="form-label">Topics</label>
          <Select
            name={'topic'}
            inputId="topic-input"
            options={options}
            isMulti={false}
            value={null}
            handleChange={this.onChange}
            placeholder={t`Select topic(s)`}
          />
          { 
            this.props.topics && <div className="badges selected pt-2">
              { 
                this.props.topics && topics.map(topic => 
                  <span key={`${topic}-badge`} className="badge topic-selected topic">
                    <span className="material-icons dismiss" role="button" onClick={e => this.removeTopic(topic)}>close</span>{topicDisplay(topic)}</span>
                )
              }
            </div>
          }
        </form>
      </>
    )
  }
}
