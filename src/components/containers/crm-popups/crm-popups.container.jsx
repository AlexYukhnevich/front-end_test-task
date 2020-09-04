import { connect } from 'react-redux';
import { projectActions, dataActions } from '../../../store/actions';
import CrmPopupsComponent from './crm-popups.component';

const mapStateToProps = ({ project, data }) => ({
  openCreateProjectPopup: project.openCreateProjectPopup,
  openEditProjectPopup: project.openEditProjectPopup, 
  openDeleteProjectPopup: project.openDeleteProjectPopup,
  activeProjectId: project.activeProjectId,
  replicaActiveProjectId: project.replicaActiveProjectId,
  loading: data.loading,
  error: data.error,
  openErrorPopup: data.openPopup,
  projects: project.projects
});

const mapDispatchToProps = {
  createProjectPopup: projectActions.projectCreateOpenAction,
  editProjectPopup: projectActions.projectEditOpenAction,
  deleteProjectPopup: projectActions.projectDeleteOpenAction,
  errorPopup: dataActions.errorPopupAction,
  setError: dataActions.errorAction,
  setLoader: dataActions.loadingAction,
  getProjects: projectActions.fetchedProjectsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(CrmPopupsComponent);