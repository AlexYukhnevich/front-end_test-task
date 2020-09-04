import React from 'react';
import PropTypes from 'prop-types';

const DateInput = (props) => {
  const { label, id, value, changeField, className } = props;
  return (    
    <div className={`${className}-inp-wrapper`}>
      <label htmlFor={id}>{label}</label>
      <input 
        className={`${className}-inp-wrapper__item`}
        type="date" 
        id={id}
        onChange={changeField}
        value={value}
        required
      />
    </div>    
  )
}

DateInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  changeField: PropTypes.func,
  className: PropTypes.string,
};

export default DateInput;