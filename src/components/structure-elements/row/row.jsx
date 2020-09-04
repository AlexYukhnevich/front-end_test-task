import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ className, label, verification, error }) => {
  
  const modificator = verification ? 'verified' : ''; 
  const sendDataModificator = !verification && error ? 'non-verified' : '';

  return <li className={`${className}-item ${modificator} ${sendDataModificator}`}>{label}</li>
};

Row.propTypes = {
  props: PropTypes.shape({
    className: PropTypes.string, 
    label: PropTypes.string.isRequired, 
    verification: PropTypes.oneOfType([ 
      PropTypes.string,
      PropTypes.bool
    ]), 
    error: PropTypes.string
  })
};

export default Row;