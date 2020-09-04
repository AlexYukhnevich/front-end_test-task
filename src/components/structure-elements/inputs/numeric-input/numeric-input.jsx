import React from 'react';
import PropTypes from 'prop-types';

const NumericInput = (props) => {
  const { label, id, value, changeField, className, max } = props;

  return (    
    <div className={`${className}-inp-wrapper`}>
      <label htmlFor={id}>{label}</label>
      <input 
        className={`${className}-inp-wrapper__item`}
        type="number" 
        id={id}
        min="0"
        max={max}
        onChange={changeField}
        value={value}
        autoComplete="off"
        required
      />
    </div>    
  )
};

NumericInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  changeField: PropTypes.func,
  className: PropTypes.string,
  max: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
    PropTypes.string,
  ])
};

export default NumericInput;
