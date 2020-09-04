import { connect } from 'react-redux';
import { projectActions } from '../../../store/actions';
import ProjectPanelComponent from './project-panel.component';

const { projectCreateOpenAction } = projectActions;

const mapStateToProps = ({ project }) => ({
  open: project.openCreateProjectPopup,
});

const mapDispatchToProps = (dispatch) => ({
  openPopup: (bool) => dispatch(projectCreateOpenAction(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPanelComponent);