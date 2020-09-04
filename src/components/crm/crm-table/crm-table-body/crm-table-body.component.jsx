import React from 'react';
import CrmProjectItem from '../../project-item';
import PropTypes from 'prop-types';

const CrmTableBodyComponent = (props) => {
  const { setActiveProject, activeProjectId, projects, user } = props;

  return (
    <tbody>
      { projects && projects.map((project) => (
          <CrmProjectItem 
            key={project.id} 
            project={project} 
            currentUser={user}
            isActive={activeProjectId === project.id}
            setActiveProject={setActiveProject} 
            activeProjectId={activeProjectId}
          />  
        ))
      }
    </tbody>
  )
}

CrmTableBodyComponent.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
      resourses: PropTypes.string,
      price: PropTypes.string,
      provider: PropTypes.string,
      complicity: PropTypes.string,
      start_date: PropTypes.string,
      deadline: PropTypes.string,
      offers: PropTypes.string,
    }
  )),
  setActiveProject: PropTypes.func.isRequired, 
  activeProjectId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    role: PropTypes.string,
  }),
};

export default CrmTableBodyComponent;
