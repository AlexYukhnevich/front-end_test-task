import React from 'react';
import PropTypes from 'prop-types';

const ProjectPanelComponent = (props) => {
  const { openPopup, open } = props;
  const handleOpenCreateProjectPopup = () => openPopup(!open);

  return (
    <div className="crm-project-panel">
      <h2 className="crm-project-panel__title">Projects</h2>
      <button 
        className="crm-project-panel__create"
        onClick={handleOpenCreateProjectPopup}
      >Create Project</button>
    </div>
  )
}

ProjectPanelComponent.propTypes = {
  openCreatePopup: PropTypes.func,
  openCreateProjectPopup: PropTypes.bool,
};

export default ProjectPanelComponent;