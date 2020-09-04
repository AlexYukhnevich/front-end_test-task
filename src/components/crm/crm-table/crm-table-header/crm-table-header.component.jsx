import React, { useState } from 'react';
import { tableHeaderData } from '../../../../data';
import { normalizeLabel } from '../../../../normalize';
import projectApi from '../../../../services/project';
import PropTypes from 'prop-types';
import { ALLOWED_VALUES_FOR_SORT } from '../../../../config';

const CrmTableHeaderComponent = (props) => {

  const { getProjects, setError } = props;
  const [ tableTitles ] = useState(tableHeaderData);

  const sendRequest = async (action, label) => {
    try {
      const response = await projectApi[action](label);
      if (response.success) {
        getProjects(response.data);
      } else {
        throw new Error(response.message);
      }
    } 
    catch (err) { 
      setError(err.message);
    }
  }

  const sortByColumn = (label) => {
    if (ALLOWED_VALUES_FOR_SORT.includes(label)){
      sendRequest('sort', label);
    }
  }

  return (
    <thead className="crm-table-header">
      <tr className="crm-table-header__row">
        {
          tableTitles.map(({ label }) => (
          <th 
            key={label} 
            className="crm-table-header__row-title"
            onClick={() => sortByColumn(normalizeLabel(label))}
          >{label}</th>
          ))
        }
        <th className="crm-table-header__row-title">&nbsp;</th>
      </tr>
    </thead>
  )
}

CrmTableHeaderComponent.propTypes = {
  getProjects: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default CrmTableHeaderComponent;