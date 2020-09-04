import { projectConstants } from '../constants';

const { 
  PROJECT_OPEN_EDIT_POPUP,  
  PROJECT_OPEN_DELETE_POPUP,  
  PROJECT_OPEN_CREATE_POPUP,  
  PROJECT_SEARCH,
  PROJECT_ALL,
  PROJECT_MY,
  PROJECT_ACQUIRED,
  PROJECT_SAVED,
  PROJECT_SET_ACTIVE,
  PROJECT_SET_REPLICA_ACTIVE,
  PROJECT_CREATE,
  PROJECT_FETCHED,
} = projectConstants;

const projectCreateOpenAction = (value) => ({
  type: PROJECT_OPEN_CREATE_POPUP,
  payload: value,
});

const projectEditOpenAction = (value) => ({
  type: PROJECT_OPEN_EDIT_POPUP,
  payload: value,
});

const projectDeleteOpenAction = (value) => ({
  type: PROJECT_OPEN_DELETE_POPUP,
  payload: value,
});

const projectSearchAction = (value) => ({
  type: PROJECT_SEARCH,
  payload: value,
});

const projectAllAction = () => ({
  type: PROJECT_ALL
});

const projectMyAction = (projects) => ({
  type: PROJECT_MY,
  payload: projects,
});

const projectAcquiredAction = () => ({
  type: PROJECT_ACQUIRED
});

const projectSavedAction = (drafted) => ({
  type: PROJECT_SAVED,
  payload: drafted,
});

const setActiveProject = (value) => ({
  type: PROJECT_SET_ACTIVE,
  payload: value
});

const setReplicaOfActiveProject = (value) => ({
  type: PROJECT_SET_REPLICA_ACTIVE,
  payload: value,
});

const projectCreateAction = (project) => ({
  type: PROJECT_CREATE,
  payload: project,
});

const fetchedProjectsAction = (projects) => ({
  type: PROJECT_FETCHED,
  payload: projects
});

export {
  projectCreateAction,
  projectEditOpenAction,
  projectDeleteOpenAction,
  projectSearchAction,
  projectAllAction,
  projectMyAction,
  projectAcquiredAction,
  projectSavedAction,
  setActiveProject,
  projectCreateOpenAction,
  fetchedProjectsAction,
  setReplicaOfActiveProject,
};