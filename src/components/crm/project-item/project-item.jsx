import React from 'react';
import { values, toPairs } from 'lodash';
import ProjectItemAction from './project-item-action';
import { 
  ProjectIdCell,
  ProjectNameCell,
  ProjectResourcesCell,
  ProjectPriceCell,
  ProjectProviderCell,
  ProjectComplicityCell,
  ProjectStartDateCell,
  ProjectDeadlineCell,
  ProjectOffersCell,
  ProjectStatusCell,
} from './project-item-cells';

const CrmProjectItem = (props) => {
  const { project, currentUser, activeProjectId, setActiveProject, isActive } = props;
  const { 
    id: projectId,
    complicity, 
    deadline, 
    name, 
    offers, 
    price, 
    resources, 
    start_date, 
    status,
    provider,
    drafted, 
    userId,
  } = project;
  const currentUserId = currentUser ? currentUser.id : null;
  const isMyProject = currentUserId === userId;

  const toggleDropDown = () => {
    if (isMyProject) {
      isActive ? setActiveProject({ 
        projectId: null, 
        replicatedProjectId: activeProjectId,
      }) : setActiveProject({
        projectId, 
        replicatedProjectId: projectId,
      })
    }
  }

  return project && 
  (<tr className="crm-table-body__row">
      <ProjectIdCell value={projectId}/>
      <ProjectNameCell value={name}/>
      <ProjectStatusCell 
        status={status} 
        my={isMyProject}
        acquired={!isMyProject}
        saved={drafted}
      />
      <ProjectResourcesCell value={resources}/>
      <ProjectPriceCell value={price}/>
      <ProjectProviderCell value={provider}/>
      <ProjectComplicityCell value={complicity}/>
      <ProjectStartDateCell value={start_date}/>
      <ProjectDeadlineCell value={deadline}/>
      <ProjectOffersCell value={offers}/>
      <ProjectItemAction
        projectId={projectId}
        isActive={isActive}
        isOwner={isMyProject}
        toggleDropDown={toggleDropDown}
      /> 
    </tr>
  )
}

export default CrmProjectItem;
