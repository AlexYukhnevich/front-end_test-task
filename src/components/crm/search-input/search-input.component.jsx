import React, { useState } from 'react';
import SearchIcon from './search-icon';
import PropTypes from 'prop-types';
import projectApi from '../../../services/project';

const SearchInputComponent = (props) => {
  const { getProjects, setError} = props;
  const [ value, setValue ] = useState('');

  const onSetValue = (e) => setValue(e.target.value);

  const sendRequest = async (action, value = null) => {
    try {
      const response = await projectApi[action](value);
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


  const searchProjects = () => value ? sendRequest('search', value) : sendRequest('get');

  return (
    <div className="crm-search">
      <div className="crm-search-inp-wrapper">
        <input 
          className="crm-search-inp-wrapper__search" 
          type="search" 
          placeholder="Search by name"
          onChange={onSetValue}
          value={value}
        />
        <SearchIcon />
      </div>
      <button 
        className="crm-btn crm-search__btn"
        onClick={searchProjects}
      >Search</button>
    </div>
  )
}

SearchInputComponent.propTypes = {
  searchProjects: PropTypes.func,
};

export default SearchInputComponent;