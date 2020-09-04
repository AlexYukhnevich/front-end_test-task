import React from 'react';
import { PROJECT_ID_LENGTH } from '../../../../constants';

const ProjectIdCell = ({ value }) => {
  const formatedValue = value.slice(0, PROJECT_ID_LENGTH);
  return (
    <td className="crm-table-body__row-cell">{formatedValue}</td>
  )
};

export default ProjectIdCell;