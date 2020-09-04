import { connect } from 'react-redux';
import { projectActions } from '../../../store/actions';
import ProjectItemActionDropDownComponent from './project-item-action.component';

const { 
  projectEditOpenAction, 
  projectDeleteOpenAction,
} = projectActions;

const mapStateToProps = ({ project }) => ({ 
  openEdit: project.openEditProjectPopup,
  openDelete: project.openDeleteProjectPopup,
});

const mapDispatchToProps = (dispatch) => ({
  editProjectPopup: (bool) => dispatch(projectEditOpenAction(bool)),
  deleteProjectPopup: (bool) => dispatch(projectDeleteOpenAction(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItemActionDropDownComponent);