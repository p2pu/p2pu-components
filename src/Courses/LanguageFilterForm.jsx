import React, { Component } from 'react'
import { t } from 'ttag';
import ApiHelper from '../utils/apiHelper'
import Select from '../InputFields/Select';

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

  handleSelect = ({languages}) => {
    if (languages) {
      this.props.updateQueryParams({languages: [...this.props.languages, languages]});
    }
  }

  removeLanguage = lang => {
    this.props.updateQueryParams({languages: this.props.languages.filter(l => l != lang)});
  }

  mapArrayToSelectOptions = (array) => {
    let res =  array.map((item) => ({ value: item.code, label: item.name_local }));
    res.sort( (e1, e2) => e1.label.localeCompare(e2.label) );
    return res;
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

    return(
      <form className="search">
        <label htmlFor="search-input" className="form-label">Languages</label>
        <Select
          name={'languages'}
          classes='no-flex'
          options={options}
          isMulti={false}
          value={null}
          handleChange={this.handleSelect}
          placeholder={t`Select language(s)`}
        />
        <div className="badges selected pt-2">
          { 
            this.props.languages.map(lang =>
              <span key={`${lang}-badge`} className="badge topic-selected topic"><span className="material-icons dismiss" role="button" onClick={()=> this.removeLanguage(lang)}>close</span>{langName(lang)}</span>
            )
          }
        </div>
      </form>
    )
  }
}
