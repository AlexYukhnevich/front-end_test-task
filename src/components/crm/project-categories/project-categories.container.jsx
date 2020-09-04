import { connect } from 'react-redux';
import { projectActions, dataActions } from '../../../store/actions';
import ProjectCategoriesComponent from './project-categories.component';

const {
  projectAllAction,
  projectMyAction,
  projectAcquiredAction,
  projectSavedAction,
  fetchedProjectsAction,
} = projectActions;

const { errorAction } = dataActions;

const mapStateToProps = ({ project, auth }) => ({
  projects: project.projects,
  user: auth.user
});

const mapDispatchToProps = {
  getAllProjects: projectAllAction,
  getMyProjects: projectMyAction,
  getAcquiredProjects: projectAcquiredAction,
  getSavedProjects: projectSavedAction,
  getProjects: fetchedProjectsAction,
  setError: errorAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCategoriesComponent);