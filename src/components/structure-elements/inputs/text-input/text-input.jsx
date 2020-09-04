import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { label, id, placeholder, value, changeField, className } = props;
  return (
    <div className={`${className}-inp-wrapper`}>
      <label htmlFor={id}>{label}</label>
      <input 
        className={`${className}-inp-wrapper__item`}
        type="text" 
        id={id} 
        placeholder={placeholder}
        onChange={changeField}
        value={value} 
        autoComplete="off"
        required
      />
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  changeField: PropTypes.func,
  className: PropTypes.string,
};

export default TextInput;