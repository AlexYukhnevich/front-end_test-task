import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ label, styles, submit }) => {
  const changeStructure = styles ? `${styles}-btn-submit` : '';
  
  return (
    <button 
      className={`btn btn-submit ${changeStructure}`}
      onClick={submit}
    >{label}</button>
  )
};

SubmitButton.propTypes = {
  label: PropTypes.string,
  styles: PropTypes.string,
  submit: PropTypes.func,
}

export default SubmitButton;