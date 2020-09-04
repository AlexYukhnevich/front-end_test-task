import React, { Fragment, useState, useEffect } from 'react';
import FontAwesome from '../../font-awesome';
import PropTypes from 'prop-types';

const ProjectOptionsDropDown = (props) => {

  const { title, list, onSet, label } = props;


  const [ listOpen, setListOpen ] = useState(false);
  const [ selectedItem, setSelectedItem ] = useState(null);

  const toggleList = () => setListOpen(!listOpen);
  const toggleSelected = (id) => setSelectedItem(list.find((item) => item.id === id));

  useEffect(() => {
    selectedItem && onSet(selectedItem.label);
  }, [selectedItem]);

  return (
    <div className="create-project-form-inp-wrapper">
      <div>{label}</div>
      <div className="dd-wrapper">
        <div className="dd-header" onClick={toggleList}>
          <div className="dd-header-title">{selectedItem ? selectedItem.label : title}</div>    
          <FontAwesome iconClass="arrow" icon={listOpen ? "up-open" : "down-open"}/> 
        </div>
        {
          listOpen && 
          <ul className="dd-list">
            {
              list.map(({ label, id }) => (
                <li 
                  onClick={() => toggleSelected(id)} 
                  key={id} 
                  className="dd-list-item"
                > 
                  {selectedItem && selectedItem.id === id && <FontAwesome iconClass="check" icon="ok"/>}
                  <span className="dd-list-item-text">{label}</span>
                </li>
              )) 
            }
          </ul> 
        }
      </div>
    </div>
  )
}

ProjectOptionsDropDown.propTypes = {
  title: PropTypes.string, 
  list:  PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string, 
      id: PropTypes.string,
    }), 
  ),
  onSet: PropTypes.func.isRequired,
};

export default ProjectOptionsDropDown;