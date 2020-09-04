import React from 'react';
import classNames from 'classnames';

const ProjectStatusCell = ({ 
  cellClassName = 'crm-table-body__row-cell', 
  status, 
  my, 
  acquired, 
  saved 
}) => {

  const initialStatusClassName = 'project-status-name';
  const statusClassName = status ? `${initialStatusClassName}-${status.toLowerCase().trim().replace(' ', '-')}`: '';
  
  const bulletClassName =  classNames('bullet', 
    { 'bullet-my': my }, 
    { 'bullet-acquired': acquired }, 
    { 'bullet-saved': saved }, 
  );

  return (
    <td className={`${cellClassName}`}>
      <div className={`${cellClassName}-wrapper-content`}>
        <div className={`${bulletClassName}`}></div>
        <div className={`${initialStatusClassName} ${statusClassName}`}>
          {status}
        </div>
      </div>
    </td>
  )
};

export default ProjectStatusCell;