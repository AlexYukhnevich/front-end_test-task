import React, { useState, useRef, useContext, useLayoutEffect } from 'react';
import {
  TextInput,
  NumericInput,
  DateInput,
} from '../../components/structure-elements/inputs';
import SubmitButton from '../structure-elements/submit-button';
import { useInput, useRestrictInput } from '../hooks';
import { projectProviders, projectStatuses } from '../../data';
import { ProjectOptionsDropDown } from '../dropdowns';
import { getEntityFromCompares, checkFields } from '../../utils';
import { userErrors } from '../../errors/messages';
import { DimensionContext } from '../context';
import { CHANGE_COMPONENT_STRUCTURE } from '../../config';
import { omit } from 'lodash';

const className = 'popup-edit-project';

const EditProjectPopup = (props) => {
  const { 
    closeEditPopup, 
    setLoader, 
    project, 
    setError, 
    projectApi, 
    activeProjectId, 
    getProjects 
  } = props;
  const targetRef = useRef();
  const App = useContext(DimensionContext);
  const name = useInput(project.name);
  const complicity = useRestrictInput(project.complicity);
  const start_date = useInput(project.start_date);
  const deadline = useInput(project.deadline);
  const offers =  useRestrictInput(project.offers);
  const price = useRestrictInput(project.price);
  const resources = useRestrictInput(project.resources);
  const [status, setStatus] = useState(project.status);
  const [provider, setProvider] = useState(project.provider);
  const [ styles, setStyles ] = useState('');

  const onSetProvider = (elem) => setProvider(elem);
  const onSetStatus = (elem) => setStatus(elem);

  // use for transformation popup if height of App less than height of Popup
  useLayoutEffect(() => {
    if (targetRef.current) {
      const className = App.height < targetRef.current.offsetHeight ? CHANGE_COMPONENT_STRUCTURE : '';
      setStyles(className);
    }
  }, []);
  
 const updateProject = async () => {
    try {
      closeEditPopup();
      setLoader(true);

      const body = {
        name: getEntityFromCompares(project.name, name.value),
        provider: getEntityFromCompares(project.provider, provider),
        complicity: getEntityFromCompares(project.complicity, complicity.value),
        offers: getEntityFromCompares(project.offers, offers.value),
        status: getEntityFromCompares(project.status, status),
        price: getEntityFromCompares(project.price, price.value),
        resources: getEntityFromCompares(project.resources, resources.value),
        start_date: getEntityFromCompares(project.start_date, start_date.value),
        deadline: getEntityFromCompares(project.deadline, deadline.value),
      }

      // body object has mutation, but I don't know why this is happening
      const updatedBody = omit(body, ['drafted']);
      if (checkFields(updatedBody)) {
        body.drafted = project.drafted;
        const response = await projectApi.update(activeProjectId, body);
        if (response.success) {
          const projectsData = await projectApi.get();
          if (projectsData.success) {
            getProjects(projectsData.data);
          }
        }
      } else {
        throw new Error(userErrors.invalidData);
      }
    } catch ({ message }) { 
      setError(message);
    } 
    finally {
      setLoader(false);
    }
  }

  return (
    <div className={`${className} ${styles}`} ref={targetRef}>
      <TextInput 
        className={className}
        label={"Name"}
        id={"edit-project-name"}
        placeholder={"Name"}
        value={name.value}
        changeField={name.onChange}
      />
      <ProjectOptionsDropDown
        label="Status"
        list={projectStatuses}
        title={status ? status : "Select Status" }
        onSet={onSetStatus}
      />
      <NumericInput 
        className={className}
        label={"Resources"}
        id={"edit-project-resources"}
        changeField={resources.onChange}
        value={resources.value}
      />
      <NumericInput 
        className={className}
        label={"Price ($)"}
        id={"edit-project-resources"}
        changeField={price.onChange}
        value={price.value}
      />
      <ProjectOptionsDropDown
        label={"Provider"}
        list={projectProviders}
        title={provider ? provider : "Select Provider"}
        onSet={onSetProvider}
      />
      <NumericInput 
        className={className}
        label={"Complicity"}
        id={"edit-project-complicity"}
        changeField={complicity.onChange}
        value={complicity.value}
        max="100"
      />
      <DateInput 
        className={className}
        label={"Start Date"}
        id={"edit-project-start-date"}
        value={start_date.value}
        changeField={start_date.onChange}
      />
      <DateInput 
        className={className}
        label={"Deadline"}
        id={"edit-project-deadline"}
        value={deadline.value}
        changeField={deadline.onChange}
      />
      <NumericInput
        className={className}
        label={"Offers"}
        id={"edit-project-offers"}
        changeField={offers.onChange}
        value={offers.value}
      />
      <div className="buttons-wrapper">
        <SubmitButton styles={styles} label="Update" submit={() => updateProject()}/>
      </div>
    </div>
  )
}

export default EditProjectPopup;