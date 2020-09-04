
import React from 'react';
import { connect } from 'react-redux';
import { projectActions } from '../../store/actions';

const ProjectItemActionDropDown = (props) => {
  const { 
    id, 
    deleteProjectPopup, 
    editProjectPopup, 
    openEditPopup, 
    openDeletePopup,
    toggleDropDown,
  } = props;

  const handleEditProjectPopup = () => {
    editProjectPopup(!openEditPopup);
    toggleDropDown(id);
  };

  const handleRemoveProjectPopup = () => {
    deleteProjectPopup(!openDeletePopup);     
    toggleDropDown(id);
  }

  return (
    <ul className="dd-list-project-actions">
      <li className="dd-list-project-actions__item" onClick={handleEditProjectPopup}>EDIT</li>
      <li className="dd-list-project-actions__item" onClick={handleRemoveProjectPopup}>DELETE</li>
    </ul> 
  )
}

const mapStateToProps = ({ project }) => ({ 
  openEditPopup: project.openEditProjectPopup,
  openDeletePopup: project.openDeleteProjectPopup,
});

const mapDispatchToProps = {
  editProjectPopup: projectActions.projectEditOpenAction,
  deleteProjectPopup: projectActions.projectDeleteOpenAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItemActionDropDown);