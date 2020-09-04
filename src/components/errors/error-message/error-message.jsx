import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  const { styles, error } = props;
  const changeStructure = styles ? `${styles}-error` : '';
  
  return (
    <div className={`error-message ${error ? 'visible' : ''} ${changeStructure}`}>{error}</div>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;