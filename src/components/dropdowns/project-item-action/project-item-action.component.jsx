
import React from 'react';
import PropTypes from 'prop-types';

const ProjectItemActionDropDown = (props) => {
  const { 
    id, 
    deleteProjectPopup, 
    editProjectPopup,
    openEdit, 
    openDelete,
    toggleDropDown,
  } = props;

  const handleEditProjectPopup = () => {
    editProjectPopup(!openEdit);
    toggleDropDown(id);
  };

  const handleRemoveProjectPopup = () => {
    deleteProjectPopup(!openDelete);     
    toggleDropDown(id);
  }

  return (
    <ul className="dd-list-project-actions">
      <li className="dd-list-project-actions__item" onClick={handleEditProjectPopup}>EDIT</li>
      <li className="dd-list-project-actions__item" onClick={handleRemoveProjectPopup}>DELETE</li>
    </ul> 
  )
}

ProjectItemActionDropDown.propTypes = {
  id: PropTypes.string, 
  deleteProjectPopup: PropTypes.func.isRequired, 
  editProjectPopup: PropTypes.func.isRequired, 
  openEditPopup: PropTypes.bool, 
  openDeletePopup: PropTypes.bool,
  toggleDropDown: PropTypes.func,
};

export default ProjectItemActionDropDown;