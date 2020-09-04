import React, { Component } from 'react';
import FontAwesome from '../../font-awesome';
 
const DropDown = (WrappedList) => class extends Component {

  state = {
    listOpen: false,
    selectedItem: null,
  };

  toggleList = () => this.setState((prevState) => ({ listOpen: !prevState.listOpen }));

  toggleSelected = (id) => {
    this.setState(() => ({
      selectedItem: this.props.list.find((item) => item.id === id)
    }));
  }
  
  render() {
    const { listOpen, selectedItem } = this.state;
    const { title, list } = this.props;

    return (
      <div className="dd-wrapper" >
        <div className="dd-header" onClick={this.toggleList}>
          <div className="dd-header-title">{title}</div>    
          <FontAwesome iconClass="arrow" icon={listOpen ? "up-open" : "down-open"}/> 
        </div>
          {
            listOpen &&
            <WrappedList
              list={list}
              toggleSelected={this.toggleSelected}
              selectedItem={selectedItem}
            />
          }
      </div>
    )
  }
}

export default DropDown;