import React from 'react';
import { setFormatForNumber } from '../../../../utils';

const ProjectOffersCell = ({ value }) => {
  const formatedValue = setFormatForNumber(value);
  return (
    <td className="crm-table-body__row-cell">{formatedValue}</td>
  )
};

export default ProjectOffersCell;