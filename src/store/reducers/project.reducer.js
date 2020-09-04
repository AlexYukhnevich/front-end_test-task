import { projectConstants } from '../constants';

const { 
  PROJECT_OPEN_EDIT_POPUP,  
  PROJECT_OPEN_DELETE_POPUP,  
  PROJECT_OPEN_CREATE_POPUP,  
  PROJECT_SEARCH, 
  PROJECT_SET_ACTIVE,
  PROJECT_SET_REPLICA_ACTIVE,
  PROJECT_CREATE, 
  PROJECT_FETCHED,
  PROJECT_ALL,
  PROJECT_MY,
  PROJECT_ACQUIRED,
  PROJECT_SAVED,
} = projectConstants;

const projectState = {
  projects: [],
  openCreateProjectPopup: false,
  openEditProjectPopup: false,
  openDeleteProjectPopup: false,
  activeProjectId: null,
  replicaActiveProjectId: null,
};

export const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    case PROJECT_CREATE: 
      return { ...state, projects: [ ...state.projects, action.payload ] };
    case PROJECT_FETCHED: 
      return { ...state, projects: [ ...action.payload ] };
    case PROJECT_ALL: 
      return { ...state };
    case PROJECT_MY: 
      return { ...state, projects: [...action.payload] };
    case PROJECT_ACQUIRED: 
      return { ...state, projects: [...action.payload] };
    case PROJECT_SAVED:
      return { ...state, projects: [...action.payload ] };
    case PROJECT_SEARCH: 
      return { ...state, projects: [...action.payload ]};
    case PROJECT_OPEN_EDIT_POPUP: 
      return { ...state, openEditProjectPopup: action.payload };
    case PROJECT_OPEN_DELETE_POPUP: 
      return {...state, openDeleteProjectPopup: action.payload };
    case PROJECT_OPEN_CREATE_POPUP: 
      return { ...state, openCreateProjectPopup: action.payload };
    case PROJECT_SET_ACTIVE:  
      return { ...state, activeProjectId: action.payload };
    case PROJECT_SET_REPLICA_ACTIVE:
      return { ...state, replicaActiveProjectId: action.payload };
    default:
      return state;
  }
};