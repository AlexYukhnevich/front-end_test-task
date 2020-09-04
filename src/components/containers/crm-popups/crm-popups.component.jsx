import React from 'react';
import { compose } from 'redux';
import { Popup } from '../../wrappers';
import { DeleteProjectPopup, EditProjectPopup, ErrorPopup } from '../../popups';
import { ProjectApiContext } from '../../context';
import { withProjectApiService } from '../../hoc';
import projectApi from '../../../services/project';
import PropTypes from 'prop-types';
import Spinner from '../../../components/spinner';
import CreateProjectForm from '../../forms/create-project-form';

const CreateProject = compose(withProjectApiService, Popup)(CreateProjectForm);
const EditProject = compose(withProjectApiService, Popup)(EditProjectPopup);
const DeleteProject = compose(withProjectApiService, Popup)(DeleteProjectPopup);
const SpinnerPopup = Popup(Spinner);
const ErrorMessage = Popup(ErrorPopup);

const CrmPopupsComponent = (props) => {
  const { 
    openCreateProjectPopup,
    openEditProjectPopup,
    openDeleteProjectPopup,
    createProjectPopup,
    editProjectPopup,
    deleteProjectPopup,
    errorPopup,
    openErrorPopup,
    setError,
    activeProjectId,
    replicaActiveProjectId,
    getProjects,
    setLoader,
    loading,
    error,
    projects,
  } = props;

  const handleCreateProjectPopup = () => createProjectPopup(!openCreateProjectPopup);
  const handleEditProjectPopup = () => editProjectPopup(!openEditProjectPopup);
  const handleDeleteProjectPopup = () => deleteProjectPopup(!openDeleteProjectPopup);
  const handleErrorPopup = () => errorPopup(!openErrorPopup);

  return (
    <ProjectApiContext.Provider value={projectApi}>
      { openCreateProjectPopup && 
        <CreateProject
          togglePopup={handleCreateProjectPopup}
          setError={setError}
        />
      }
      { 
        openEditProjectPopup && 
        <EditProject 
          togglePopup={handleEditProjectPopup}
          closeEditPopup={() => editProjectPopup(false)}
          getProjects={getProjects}
          setError={setError}
          setLoader={setLoader}
          activeProjectId={activeProjectId || replicaActiveProjectId}
          project={projects.find(({ id }) => id === (activeProjectId || replicaActiveProjectId))}
        />
      }
      { 
        openDeleteProjectPopup && 
        <DeleteProject 
          togglePopup={handleDeleteProjectPopup}
          closeDeletePopup={() => deleteProjectPopup(false)}
          activeProjectId={activeProjectId || replicaActiveProjectId}
          setError={setError}
          setLoader={setLoader}
          getProjects={getProjects}
        />
      }
      { loading && <SpinnerPopup loading={loading}/> }
      { error && <ErrorMessage togglePopup={handleErrorPopup} error={error}/> }
    </ProjectApiContext.Provider>
  )
}

CrmPopupsComponent.propTypes = {
  openCreateProjectPopup: PropTypes.bool,
  openEditProjectPopup: PropTypes.bool,
  openDeleteProjectPopup: PropTypes.bool,
  createProjectPopup: PropTypes.func.isRequired,
  editProjectPopup: PropTypes.func.isRequired,
  deleteProjectPopup: PropTypes.func.isRequired,
  deleteProject: PropTypes.func,
  activeProjectId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]).isRequired,
};

export default CrmPopupsComponent;