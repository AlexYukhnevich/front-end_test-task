import React from 'react';
import { ProjectItemActionDropDown } from '../../../dropdowns';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ProjectItemAction = (props) => {
  const { 
    projectId, 
    isActive,
    toggleDropDown, 
    isOwner,
  } = props;
  
  const bulletListsClassName = classNames("list-bullets", { "active-cursor": isOwner });

  return (   
    <td className="crm-table-body__row-action">
      <ul className={bulletListsClassName} onClick={toggleDropDown}>
        <li className="list-bullets__item"></li>
        <li className="list-bullets__item"></li>
        <li className="list-bullets__item"></li>
      </ul>
      { isActive && <ProjectItemActionDropDown toggleDropDown={toggleDropDown} id={projectId}/> }
    </td>
  )
}

ProjectItemAction.propTypes = {
  id: PropTypes.string.isRequired, 
  isOwner:PropTypes.bool,
  isActive: PropTypes.bool, 
  toggleDropDown: PropTypes.func.isRequired,
};

export default ProjectItemAction;