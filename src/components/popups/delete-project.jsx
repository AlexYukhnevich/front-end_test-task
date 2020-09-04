import React from 'react';
import { projectErrors } from '../../errors/messages';

const DeleteProjectPopup = (props) => {
  const { 
    activeProjectId, 
    projectApi, 
    setError, 
    setLoader, 
    getProjects, 
    closeDeletePopup,
  } = props;

  const handleDeleteProject = async () => {
    closeDeletePopup();
    setLoader(true);
    try {
      const response = await projectApi.remove(activeProjectId);
      if (response.success) {
        const projectsData = await projectApi.get();
        if (projectsData.success) {
          getProjects(projectsData.data);
        }
      } else {
        throw new Error(projectErrors.notDeleted);
      }
    } catch ({ message }) {
      setError(message);
    } finally {
      setLoader(false);
    }
  }

  return (
    <div className="popup-delete-project">
      <p className="popup-delete-project__desc">Are you sure you want to delete this project?</p>
      <button 
        className="popup-delete-project__btn"
        onClick={handleDeleteProject}
      >Delete</button>
    </div>
  )
}

export default DeleteProjectPopup;