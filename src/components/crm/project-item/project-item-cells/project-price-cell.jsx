import React from 'react';
import { formatPrice } from '../../../../utils';
import { CURRENCY } from '../../../../config';

const ProjectPriceCell = ({ value }) => {
  const formatedValue = formatPrice(value, CURRENCY.usd);
  return (
    <td className="crm-table-body__row-cell">{formatedValue}</td>
  )
};

export default ProjectPriceCell;