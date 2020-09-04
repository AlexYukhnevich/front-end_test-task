import { connect } from 'react-redux';
import { projectActions, dataActions } from '../../../store/actions';
import CreateProjectFormComponent from './create-project.component';

const { 
  projectCreateOpenAction,
  projectCreateAction,
} = projectActions;

const {
  loadingAction, 
  errorAction, 
} = dataActions;

const mapStateToProps = ({ project, data }) => ({ 
  projects: project.projects,
  loading: data.loading,
  error: data.error,
  openCreateProjectPopup: project.openCreateProjectPopup
});

const mapDispatchToProps = (dispatch) => ({ 
  addProject: (res) => dispatch(projectCreateAction(res)),
  finishLoading: () => dispatch(loadingAction(false)),
  closePopup: () => {
    dispatch(projectCreateOpenAction(false));
    dispatch(loadingAction(true));
  },
  setError: (err) => dispatch(errorAction(err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectFormComponent);