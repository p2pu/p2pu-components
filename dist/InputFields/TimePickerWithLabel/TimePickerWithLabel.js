import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import SelectWithLabel from '../SelectWithLabel';
const timeOptions = [{
  label: "12:00 AM",
  value: "00:00"
}, {
  label: "12:30 AM",
  value: "00:30"
}, {
  label: "1:00 AM",
  value: "01:00"
}, {
  label: "1:30 AM",
  value: "01:30"
}, {
  label: "2:00 AM",
  value: "02:00"
}, {
  label: "2:30 AM",
  value: "02:30"
}, {
  label: "3:00 AM",
  value: "03:00"
}, {
  label: "3:30 AM",
  value: "03:30"
}, {
  label: "4:00 AM",
  value: "04:00"
}, {
  label: "4:30 AM",
  value: "04:30"
}, {
  label: "5:00 AM",
  value: "05:00"
}, {
  label: "5:30 AM",
  value: "05:30"
}, {
  label: "6:00 AM",
  value: "06:00"
}, {
  label: "6:30 AM",
  value: "06:30"
}, {
  label: "7:00 AM",
  value: "07:00"
}, {
  label: "7:30 AM",
  value: "07:30"
}, {
  label: "8:00 AM",
  value: "08:00"
}, {
  label: "8:30 AM",
  value: "08:30"
}, {
  label: "9:00 AM",
  value: "09:00"
}, {
  label: "9:30 AM",
  value: "09:30"
}, {
  label: "10:00 AM",
  value: "10:00"
}, {
  label: "10:30 AM",
  value: "10:30"
}, {
  label: "11:00 AM",
  value: "11:00"
}, {
  label: "11:30 AM",
  value: "11:30"
}, {
  label: "12:00 PM",
  value: "12:00"
}, {
  label: "12:30 PM",
  value: "12:30"
}, {
  label: "1:00 PM",
  value: "13:00"
}, {
  label: "1:30 PM",
  value: "13:30"
}, {
  label: "2:00 PM",
  value: "14:00"
}, {
  label: "2:30 PM",
  value: "14:30"
}, {
  label: "3:00 PM",
  value: "15:00"
}, {
  label: "3:30 PM",
  value: "15:30"
}, {
  label: "4:00 PM",
  value: "16:00"
}, {
  label: "4:30 PM",
  value: "16:30"
}, {
  label: "5:00 PM",
  value: "17:00"
}, {
  label: "5:30 PM",
  value: "17:30"
}, {
  label: "6:00 PM",
  value: "18:00"
}, {
  label: "6:30 PM",
  value: "18:30"
}, {
  label: "7:00 PM",
  value: "19:00"
}, {
  label: "7:30 PM",
  value: "19:30"
}, {
  label: "8:00 PM",
  value: "20:00"
}, {
  label: "8:30 PM",
  value: "20:30"
}, {
  label: "9:00 PM",
  value: "21:00"
}, {
  label: "9:30 PM",
  value: "21:30"
}, {
  label: "10:00 PM",
  value: "22:00"
}, {
  label: "10:30 PM",
  value: "22:30"
}, {
  label: "11:00 PM",
  value: "23:00"
}, {
  label: "11:30 PM",
  value: "23:30"
}];

const TimePickerWithLabel = props => {
  return /*#__PURE__*/React.createElement(SelectWithLabel, _extends({
    options: timeOptions
  }, props));
};

TimePickerWithLabel.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  value: PropTypes.string
};
TimePickerWithLabel.defaultProps = {
  classes: "",
  label: "Time picker",
  handleChange: input => console.log("Implement a function to save selection", input),
  required: false,
  disabled: false,
  errorMessage: null,
  value: ""
};
export default TimePickerWithLabel;