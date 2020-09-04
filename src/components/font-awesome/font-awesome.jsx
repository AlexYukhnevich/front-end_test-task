import React from 'react';
import PropTypes from 'prop-types';

const FontAwesome = (props) => {
  const { iconClass, icon } = props;
   return (
    <span className={`icon-wrapper icon-wrapper__${iconClass}`}>
      <i className={`icon-${icon}`}/>
    </span>
  )
}

FontAwesome.propTypes = {
  iconClass: PropTypes.string, 
  icon: PropTypes.string,
};

export default FontAwesome;