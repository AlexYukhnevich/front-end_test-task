import React from 'react';
import PropTypes from 'prop-types';

const EmailMessage = ({ text }) => {
  return (
    <div className="email-activate">
      <p>{text}</p>
    </div>
  )
};

EmailMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EmailMessage;