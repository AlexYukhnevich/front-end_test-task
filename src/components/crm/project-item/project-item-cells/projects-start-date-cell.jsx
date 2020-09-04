import React from 'react';
import { normalizeDate } from '../../../../normalize';
import { EMPTY } from '../../../../constants';

const ProjectStartDateCell = ({ value }) => {
  const formatedValue = value ? normalizeDate(value) : EMPTY;
  return (
    <td className="crm-table-body__row-cell">{formatedValue}</td>
  )
};

export default ProjectStartDateCell;