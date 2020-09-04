import React, { Fragment } from 'react';

const Popup = (Wrapped) => (props) => {

  const { togglePopup, closePopup: isClosed, loading, ...rest } = props; 
  const className = isClosed ? 'popup-hidden' : '';

  return (
    <div className={`popup ${className}`} >
      <div className="popup-container">
        {
          loading ? (<Wrapped />) : 
          (
            <Fragment>
              <header className='popup-container-header'>
                <span className="popup-container-close" onClick={togglePopup}>X</span>
              </header>
              <Wrapped { ...rest } />
            </Fragment>
          )
        } 
      </div>
    </div>
  )
}

export default Popup;