import React, { useEffect } from 'react';
import { connect }from 'react-redux';
import { dataActions, authActions, projectActions } from '../../store/actions';
import projectApi from '../../services/project';
import { Header } from '../../components/wrappers';
import { CrmPopupsContainer } from '../../components/containers';
import { ProjectApiContext } from '../../components/context';
import { ProjectsHeader, CrmTable, CrmProjectPanel } from '../../components/crm';
import Content from '../../components/content';
import LogoutPageNav from '../../components/navigation/logout-page-nav';
import { FETCH_TIMEOUT } from  '../../constants';

const CrmHeader = Header(LogoutPageNav);

const CrmPage = ({ loadingData, fetchProjects, setError, projects }) => {
  useEffect(() => {
    loadingData(true);
    const timer = (async () => {
      const response = await projectApi.get();
      let timerId = setTimeout(() => {
        loadingData(false);
        if (response.success) {
          fetchProjects(response);
        } else {
          setError(response.message);
        }
      }, FETCH_TIMEOUT);
      return timerId;
    })();
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProjectApiContext.Provider value={projectApi}>
      <CrmHeader />
      <Content>
        <ProjectsHeader />
        <CrmProjectPanel />
        <CrmTable/>
      </Content>
      <CrmPopupsContainer/>
    </ProjectApiContext.Provider>
  )
}

const mapStateToProps = ({ project }) => ({
  projects: project.projects
});

const mapDispatchToProps = (dispatch) => ({
  loadingData: (bool) => dispatch(dataActions.loadingAction(bool)),
  fetchProjects: (response) => {
    dispatch(authActions.setUser(response.user));
    dispatch(projectActions.fetchedProjectsAction(response.data || []));
  },
  setError: (err) => dispatch(dataActions.errorAction(err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CrmPage);