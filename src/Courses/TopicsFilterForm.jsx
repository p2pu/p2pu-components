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
    const api = new ApiHelper(resourceType);
    const params = {};
    const callback = (response) => {
      const topics = Object.keys(response.topics).sort()
      const options = this.mapArrayToSelectOptions(topics);
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

  mapArrayToSelectOptions = (array) => {
    return array.map((topic) => ({ value: topic, label: topic }))
  }

  render() {
    let {topics = []} = this.props;
    let options = this.state.options.filter( option => topics.indexOf(option.value) == -1);

    return(
      <>
        <form class="search">
          <label for="search-input" class="form-label">Topics</label>
          <Select
            name={'topic'}
            options={options}
            isMulti={false}
            value={null}
            handleChange={this.onChange}
            placeholder={t`Select topic(s)`}
          />
          <div class="badges selected pt-4">
            { 
              this.props.topics && topics.map(topic => 
                <span class="badge topic-selected topic">
                  <span class="material-icons dismiss" role="button" onClick={e => this.removeTopic(topic)}>close</span>{topic}</span>
              )
            }
          </div>
        </form>
      </>
    )
  }
}
