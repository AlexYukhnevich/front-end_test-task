import React from 'react';

const CreateProjectInput = (props) => {
  const { id, name, type, placeholder, required, label } = props;
  return (
    <div className="create-project-inp-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} required={required}/>
    </div>
  )
};



export default CreateProjectInput;