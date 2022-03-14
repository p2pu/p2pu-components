import React from 'react'

import {default as ReactSelect} from 'react-select'

const Select = (props) => {
  const {
    name,
    id,
    required,
    disabled,
    value,
    errorMessage,
    helpText,
    classes,
    selectClasses,
    options,
    handleChange,
    isMulti,
    ...rest
  } = props

  const customStyles = {
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
  }

  const onChange = selected => {
    if (!selected) { return handleChange({[name]: null }) }

    if (isMulti) {
      const value = selected.map(s => s.value)
      return handleChange({[name]: value })
    }

    return handleChange({[name]: selected.value})
  }

  const getSelected = value => {
    if (!value) {
      return null
    }

    if (isMulti && typeof(value === 'object')) {
      return value.map(v => options.find(o => o.value === v))
    }

    return options.find(o => o.value === value)
  }

  const selected = getSelected(value)

  return(
    <ReactSelect
      name={ name }
      className={ selectClasses }
      value={ selected }
      options={ options }
      onChange={ onChange }
      isMulti={ isMulti }
      isDisabled={ disabled }
      classNamePrefix={'react-select'}
      styles={customStyles}
      theme={theme => ({
        ...theme,
          colors: {
            ...theme.colors,
              primary: '#05c6b4',
              primary75: '#D3D8E6',
              primary50: '#e0f7f5',
              primary25: '#F3F4F8'
          },
      })}
      {...rest}
    />
  )
};

export default Select;


