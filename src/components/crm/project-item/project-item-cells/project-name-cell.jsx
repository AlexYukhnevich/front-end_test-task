import React from 'react';
import { sliceString } from '../../../../utils';

const ProjectNameCell = ({ value }) => {
  const formattedValue = sliceString(value);
  return (
    <td className="crm-table-body__row-cell">{formattedValue}</td>
  )
};

export default ProjectNameCell;