import React from 'react';

const ErrorPopup = ({ error }) => {
  return (
    <div className="popup-error">
      <h2 className="popup-error__title">ERROR</h2>
      <p className="popup-error__desc">{error}</p>
    </div>
  )
}

export default ErrorPopup;