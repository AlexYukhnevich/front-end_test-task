import React from 'react';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">ERROR!</span>
      <span>
          something has gone terribly wrong
      </span>
      <span>
          (we are ready to do it)
      </span>
    </div>
  )
}

export default ErrorIndicator;