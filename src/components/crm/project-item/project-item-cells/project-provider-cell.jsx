import React from 'react';
import { EMPTY } from '../../../../constants';

const ProjectProviderCell = ({ value }) => {
  const formatedValue = value ? value : EMPTY;
  return (
    <td className="crm-table-body__row-cell">{formatedValue}</td>
  )
};

export default ProjectProviderCell;