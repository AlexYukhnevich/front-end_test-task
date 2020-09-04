import React from 'react';
import PropTypes from 'prop-types';

const ProjectCategoriesItem = (props) => {
  const { label, handler, bulletClassName = ''} = props;
  return (
    <li className="crm-categories-item" onClick={handler}>
      <div className="crm-categories-item-wrapper-content">
        { bulletClassName && <span className={`bullet bullet-${bulletClassName}`}></span> }
        <span className="crm-categories-item__label">{label}</span>
      </div>
    </li>
  )
}

ProjectCategoriesItem.propTypes = {
  label: PropTypes.string.isRequired,
  bulletClassName: PropTypes.string,
};

export default ProjectCategoriesItem;