import { connect } from 'react-redux';
import CrmTableBodyComponent from './crm-table-body.component';
import { projectActions } from '../../../../store/actions';

const { setActiveProject, setReplicaOfActiveProject } = projectActions;

const mapStateToProps = ({ project, auth }) => ({ 
  projects: project.projects,
  filteredProjects: project.filteredProjects,
  activeProjectId: project.activeProjectId,
  user: auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveProject: ({ projectId, replicatedProjectId }) => {
    dispatch(setActiveProject(projectId));
    dispatch(setReplicaOfActiveProject(replicatedProjectId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CrmTableBodyComponent);