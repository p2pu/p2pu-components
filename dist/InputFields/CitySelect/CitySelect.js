import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import jsonp from 'jsonp';
import InputWrapper from '../InputWrapper';
export default class CitySelect extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "convertCityToSelectOption", city => {
      return {
        label: city,
        value: city.split(',')[0].toLowerCase().replace(/ /, '_')
      };
    });

    _defineProperty(this, "onChange", selected => {
      const query = selected ? selected.label : selected;
      this.props.handleChange({
        [this.props.name]: query
      });
    });

    _defineProperty(this, "populateCities", () => {
      const url = 'https://learningcircles.p2pu.org/api/learningcircles/?active=true&signup=open';
      jsonp(url, null, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          this.filterCitiesFromResults(res.items);
        }
      });
    });

    _defineProperty(this, "filterCitiesFromResults", courses => {
      let cities = courses.map(course => {
        if (course.city.length > 0) {
          return this.convertCityToSelectOption(course.city);
        }
      });
      cities = cities.filter(city => city);

      const uniqBy = (arr, fn) => [...new Map(arr.reverse().map(x => [typeof fn === 'function' ? fn(x) : x[fn], x])).values()];

      cities = uniqBy(cities, el => el.value);
      cities.sort(el => el.label);
      this.setState({
        cities
      });
    });

    _defineProperty(this, "getSelected", value => {
      const {
        isMulti
      } = this.props;
      const {
        cities
      } = this.state;

      if (!value) {
        return null;
      }

      if (isMulti && typeof (value === 'object')) {
        return value.map(v => cities.find(city => city.label === v));
      }

      return cities.find(city => city.label === value);
    });

    this.state = {
      cities: []
    };
    this.populateCities();
  }

  render() {
    const {
      label,
      name,
      id,
      value,
      disabled,
      required,
      errorMessage,
      helpText,
      classes,
      selectClasses,
      handleInputChange,
      noResultsText,
      placeholder,
      isClearable,
      isMulti,
      ...rest
    } = this.props;
    const {
      cities
    } = this.state;
    const selected = this.getSelected(value);
    return /*#__PURE__*/React.createElement(InputWrapper, {
      label: label,
      name: name,
      id: id,
      required: required,
      disabled: disabled,
      errorMessage: errorMessage,
      helpText: helpText,
      classes: classes
    }, /*#__PURE__*/React.createElement(Select, _extends({
      name: name,
      className: `city-select ${selectClasses}`,
      value: selected,
      options: cities,
      onChange: this.onChange,
      onInputChange: handleInputChange,
      noResultsText: noResultsText,
      placeholder: placeholder,
      isClearable: isClearable,
      isMulti: isMulti,
      isDisabled: disabled,
      classNamePrefix: 'city-select',
      theme: theme => ({ ...theme,
        colors: { ...theme.colors,
          primary: '#05c6b4',
          primary75: '#D3D8E6',
          primary50: '#e0f7f5',
          primary25: '#F3F4F8'
        }
      })
    }, rest)));
  }

}
CitySelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  classes: PropTypes.string,
  noResultsText: PropTypes.string,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  errorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool
};
CitySelect.defaultProps = {
  noResultsText: "No results for this city",
  placeholder: "Start typing a city name...",
  classes: "",
  name: "select-city",
  handleChange: selected => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false,
  value: null
};