import React, { Component } from 'react';

export default class ComboItemView extends Component {
  render() {
    const {
      name,
      isSelected,
      className,
      setSelectedComboItem
    } = this.props;
    
    const b = 'combo-item'
    return (
      <div className = {`${className} ${b} ${b}_selected_${isSelected}`}
           data-kind = {name}
           data-selected = {isSelected}
           onClick = {setSelectedComboItem.bind(null, name)}>
        {name}
      </div>
    );
  }
}