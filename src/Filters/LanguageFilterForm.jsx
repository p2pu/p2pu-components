import React, { Component } from 'react'
import { t } from 'ttag';
import ApiHelper from '../utils/apiHelper'

import SelectWithLabel from '../InputFields/SelectWithLabel'
import Select from 'react-select'

export default class LanguageFilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = { options: [] };
  }

  componentDidMount() {
    this.fetchLanguages();
  }

  fetchLanguages = () => {
    const resourceType = `coursesLanguages`;
    const api = new ApiHelper(resourceType);
    const params = {};
    const callback = (response) => {
      const options = this.mapArrayToSelectOptions(response.languages);
      this.setState({ options })
    }

    api.fetchResource({ params, callback })
  }

  handleSelect = (selected) => {
    if (selected) {
      this.props.updateQueryParams({languages: [...this.props.languages, selected.value]});
    }
  }

  removeLanguage = lang => {
    this.props.updateQueryParams({languages: this.props.languages.filter(l => l != lang)});
  }

  mapArrayToSelectOptions = (array) => {
    return array.map((item) => ({ value: item.code, label: item.name_local }))
  }

  render() {
    console.log('this.props.languages', this.props.languages)
    let options = this.state.options.filter( option => this.props.languages.indexOf(option.value) == -1 );

    const langName = lang => {
      let langs = this.state.options.filter(o => o.value === lang);
      console.log(langs);
      if (langs.length){
        return langs[0].label;
      }
      return lang;
    };

    const customStyles = {
      indicatorSeparator: (provided, state) => ({
        ...provided,
        display: 'none',
      }),
    }

    return(
      <form class="search">
        <label for="search-input" class="form-label">Languages</label>
        <Select
          name={'languages'}
          classes='no-flex'
          options={options}
          isMulti={false}
          value={null}
          onChange={this.handleSelect}
          styles={customStyles}
        />
        <div class="badges selected pt-4">
          { 
            this.props.languages.map(lang =>
              <span class="badge topic-selected topic"><span class="material-icons dismiss" onClick={()=> this.removeLanguage(lang)}>close</span>{langName(lang)}</span>
            )
          }
        </div>
      </form>
    )
  }
}
