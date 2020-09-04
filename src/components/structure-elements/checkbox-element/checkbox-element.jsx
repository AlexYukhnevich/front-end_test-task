import React from 'react';
import PropTypes from 'prop-types';

const CheckboxElement = (props) => {
  const { label, className, checked, id, handler, styles } = props;
  const changeStructure = styles ? `${styles}-accept`: '';

  return (
    <div className={`${className} ${changeStructure}`} >
      <input 
        className={`${className}__checkbox`} 
        type="checkbox" 
        id={id} 
        onChange={handler}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
};

CheckboxElement.propTypes = {
  label: PropTypes.string.isRequired,
  className:PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  styles: PropTypes.string,
};

export default CheckboxElement;