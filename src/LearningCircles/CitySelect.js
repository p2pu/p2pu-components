import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import jsonp from 'jsonp'


export const CitySelect = props => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    const url = `${props.origin}/api/learningcircles/cities/`;
    jsonp(url, null, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        if (res.items) {
          let cities_ = res.items.filter( city => city );
          const uniqBy = (arr, fn) => [...new Map(arr.map((x) => [typeof fn === 'function' ? fn(x) : x[fn], x])).values()]
          cities_ = uniqBy(cities_, el => el.value);
          setCities(cities_);
        } else {
          console.log(res)
        }
      }
    });
  }, [])


  const onChange = (selected) => {
    const query = selected ? selected.label : selected;
    props.handleChange({ [props.name]: query })
  }

  const getSelected = value => {
    const { isMulti } = props;
    if (!value) {
      return null
    }

    if (isMulti && typeof(value === 'object')) {
      return value.map(v => cities.find(city => city.label === v))
    }

    return cities.find(city => city.label === value)
  }

  const { 
    name, id, value, disabled, required, errorMessage,
    classes, selectClasses, handleInputChange, noResultsText,
    placeholder, isClearable, isMulti, ...rest 
  } = props;

  const selected = getSelected(value);

  const customStyles = {
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
  }

  return(
    <Select
      name={ name }
      className={ `city-select ${selectClasses}` }
      value={ selected }
      options={ cities }
      onChange={ onChange }
      onInputChange={ handleInputChange }
      noResultsText={ noResultsText }
      placeholder={ placeholder }
      isClearable={ isClearable }
      isMulti={ isMulti }
      isDisabled={ disabled }
      classNamePrefix={'city-select'}
      styles={customStyles}
      {...rest}
    />
  )
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
  isMulti: PropTypes.bool,
}

CitySelect.defaultProps = {
  noResultsText: "No results for this city",
  placeholder: "Start typing a city name...",
  classes: "",
  name: "select-city",
  handleChange: (selected) => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false,
  value: null,
}

export default CitySelect;
