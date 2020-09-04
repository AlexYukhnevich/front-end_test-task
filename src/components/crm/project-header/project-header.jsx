import React from 'react';
import SearchInput from '../search-input';
import ProjectCategories from "../project-categories";

const ProjectsHeader = () => {
  return (
    <header className="crm-header">
      <div className="crm-header-wrapper">
        <SearchInput />
        <ProjectCategories/>
      </div>
    </header>
  )
}

export default ProjectsHeader;