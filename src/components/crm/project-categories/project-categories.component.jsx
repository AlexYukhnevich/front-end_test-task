import React from 'react';
import ProjectCategoriesItem from '../project-categories-item';
import PropTypes from 'prop-types';
import projectApi from '../../../services/project';

const ProjectCategoriesComponent = ({ getProjects, setError }) => {

  const sendRequest = async (action) => {
    try {
      const response = await projectApi[action]();
      if (response.success) {
        getProjects(response.data);
      } else {
        throw new Error(response.message);
      }
    } 
    catch (err) { 
      setError(err.message);
    }
  }

  const handleAllProjects = () => sendRequest('get');
  const handleMyProjects = () => sendRequest('getMy');
  const handleAcquiredProjects = () => sendRequest('getAcquired');
  const handleSavedProjects = async () => sendRequest('getSaved');
  
  return (
    <ul className="crm-project-nav-categories">
      <ProjectCategoriesItem handler={handleAllProjects} label="All"/>
      <ProjectCategoriesItem handler={handleMyProjects} label="My" bulletClassName="my"/>
      <ProjectCategoriesItem handler={handleAcquiredProjects} label="Acquired" bulletClassName="acquired"/>
      <ProjectCategoriesItem handler={handleSavedProjects} label="Saved" bulletClassName="saved"/>
    </ul>
  )
}

ProjectCategoriesComponent.propTypes = {
  allProjects: PropTypes.func.isRequired, 
  myProjects: PropTypes.func.isRequired, 
  acquiredProjects: PropTypes.func.isRequired, 
  savedProjects: PropTypes.func.isRequired,
};

export default ProjectCategoriesComponent;