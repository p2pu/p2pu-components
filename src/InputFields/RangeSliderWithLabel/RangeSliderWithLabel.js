import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-rangeslider'
import InputWrapper from '../InputWrapper'
import 'react-rangeslider/lib/index.css'
import './rangeslider.css'

const RangeSliderWithLabel = (props) => {
  const disabledClass = props.disabled ? 'disabled' : '';
  const { label, name, id, handleChange, required, disabled, errorMessage, helpText, classes, value, min, max, step, ...rest } = props;

  const onChange = value => {
    if (props.disabled) return null;
    handleChange({ [name]: value })
  }


  return (
    <InputWrapper
      label={label}
      name={name}
      id={id}
      required={required}
      disabled={disabled}
      errorMessage={errorMessage}
      helpText={helpText}
      classes={classes}
    >
      <Slider
        value={value}
        name={name}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        {...rest}
      />
    </InputWrapper>
  )
}

RangeSliderWithLabel.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  classes: PropTypes.string,
  noResultsText: PropTypes.string,
  helpText: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
}

RangeSliderWithLabel.defaultProps = {
  noResultsText: "No results for this city",
  placeholder: "Start typing a city name...",
  classes: "",
  selectClasses: "",
  handleChange: (selected) => console.log("Implement a function to save selection", selected),
  isClearable: true,
  isMulti: false,
  disabled: false,
  required: false,
}

export default RangeSliderWithLabel;