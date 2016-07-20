import React, { Component } from 'react';
import ComboItemView from './combo-item';

export default class Combo extends React.Component {
  render() {
    const {
      buttonValue,
      comboList,
      className = '',
      combo: {showDropdown},
      actions: {setSelectedComboItem, setVisibilityComboDropdown}
    } = this.props;

    const b = 'combo';

    return (
      <div className = {`${className} ${b} ${b}_show-dropdown_${showDropdown}`}>
        <button className = {`${b}__button`}
                onClick = {setVisibilityComboDropdown.bind(null, !showDropdown)}>
          <div className = {`${b}__button-text`}>{buttonValue}</div>
        </button>
        <div className = {`${b}__dropdown`}>
          {
            comboList.map((comboItem)=> {
              return (
                <ComboItemView
                  key={comboItem.name}
                  className = {`${b}__item`}
                  setSelectedComboItem = {setSelectedComboItem}
                  {...comboItem}/>
              )
            })
          }
        </div>
      </div>
    );
  }
}

