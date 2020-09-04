import React, { useState, useRef, useContext, useLayoutEffect } from 'react';
import SubmitButton from '../../structure-elements/submit-button';
import { projectProviders, projectStatuses } from '../../../data';
import { ProjectOptionsDropDown } from '../../dropdowns';
import { useInput, useRestrictInput } from '../../hooks';
import { PROJECT_DRAFTED } from '../../../config';
import { TextInput, NumericInput, DateInput } from '../../structure-elements/inputs';
import { checkFields } from '../../../utils';
import { userErrors } from '../../../errors/messages';
import { DimensionContext } from '../../context';
import { CHANGE_COMPONENT_STRUCTURE } from '../../../config';
import { normalizeToNumber } from '../../../normalize';

const className = 'create-project-form';

const CreateProjectFormComponent = (props) => {
  const { projectApi, addProject, finishLoading, closePopup, setError } = props;
  const targetRef = useRef();
  const App = useContext(DimensionContext);
  
  const name = useInput('');
  const complicity = useRestrictInput('');
  const startDate = useInput('');
  const deadline = useInput('');
  const offers =  useRestrictInput('');
  const price = useRestrictInput('');
  const resources = useRestrictInput('');
  const [status, setStatus] = useState('');
  const [provider, setProvider] = useState('');
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

  const createProject = async (action) => {
    try {
      closePopup();
      const body = {
        name: name.value,
        complicity: normalizeToNumber(complicity.value),
        start_date: startDate.value || null,
        deadline: deadline.value || null,
        offers: normalizeToNumber(offers.value),
        price: normalizeToNumber(price.value),
        resources: resources.value,
        provider,
        status,
      }
      if (checkFields(body)) {
        // done this way because there were problems with falsy values
        const response = await projectApi.create({ ...body, drafted: action === PROJECT_DRAFTED})
        if (response && response.data && response.data.id) {
          addProject(response.data)
        }
      } 
      else {
        throw new Error(userErrors.invalidData);
      }
    }
     catch (err) { 
      setError(err.message);
    } 
    finally {
      finishLoading(false);
    }
  }

  return (
    <div className={`${className} ${styles}`} ref={targetRef}>
      <TextInput 
        className={className}
        label={"Name"}
        id={"project-name"}
        placeholder={"Name"}
        value={name.value}
        changeField={name.onChange}
      />
      <ProjectOptionsDropDown
        label="Status"
        list={projectStatuses}
        title="Select Status"
        onSet={onSetStatus}
      />
      <NumericInput 
        className={className}
        label={"Resources"}
        id={"project-resources"}
        changeField={resources.onChange}
        value={resources.value}
      />
      <NumericInput 
        className={className}
        label={"Price ($)"}
        id={"project-resources"}
        max="10000000000"
        changeField={price.onChange}
        value={price.value}
      />
      <ProjectOptionsDropDown
        label={"Provider"}
        list={projectProviders}
        title="Select Provider"
        onSet={onSetProvider}
      />
      <NumericInput 
        className={className}
        label={"Complicity"}
        id={"project-complicity"}
        changeField={complicity.onChange}
        value={complicity.value}
        max="100"
      />
      <DateInput 
        className={className}
        label={"Start Date"}
        id={"project-start-date"}
        value={startDate.value}
        changeField={startDate.onChange}
        styles={styles}
      />
      <DateInput 
        className={className}
        label={"Deadline"}
        id={"project-deadline"}
        value={deadline.value}
        changeField={deadline.onChange}
        styles={styles}
      />
      <NumericInput
        className={className}
        label={"Offers"}
        id={"project-offers"}
        changeField={offers.onChange}
        value={offers.value}
        styles={styles}
      />
      <div className="buttons-wrapper">
        <SubmitButton styles={styles} label="Create" submit={() => createProject('create')}/>
        <SubmitButton styles={styles} label="Save As Draft" submit={() => createProject('save_as_draft')}/>
      </div>
    </div>
  )
}

export default CreateProjectFormComponent;