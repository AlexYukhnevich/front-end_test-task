import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const { children } = props;
  return (
    <main className="app-content">
      { children }
    </main>
  )
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Content;