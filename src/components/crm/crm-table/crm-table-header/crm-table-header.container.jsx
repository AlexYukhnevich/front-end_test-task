import { connect } from 'react-redux';
import { projectActions, dataActions } from '../../../../store/actions';
import CrmTableHeaderComponent from './crm-table-header.component';

const { fetchedProjectsAction } = projectActions;
const { errorAction } = dataActions;

const mapDispatchToProps = {
  getProjects: fetchedProjectsAction,
  setError: errorAction,
};

export default connect(null, mapDispatchToProps)(CrmTableHeaderComponent);