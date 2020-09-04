import React from 'react';
import CrmTableHeader from './crm-table-header';
import CrmTableBody from './crm-table-body';
import PropTypes from 'prop-types';

const CrmTable = ({ projects }) => {
  return (
    <table className="crm-table">      
      <CrmTableHeader/>
      <CrmTableBody projects={projects}/>
    </table>
  )
}

// CrmTable.propTypes = {
//   projects: PropTypes.arrayOf(PropTypes.shape({

//   }))
// }


export default CrmTable;