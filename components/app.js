import React, { Component }  from 'react';
import Combo from '../containers/combo';
import Fligths from '../containers/flights';

export default class App extends Component {

  render() {
    const b = 'app';
    return (
      <div className = {b}>
        <Combo className = {`${b}__combo`}/>
        <Fligths className = {`${b}__flights`}/>
      </div>
    )
  }
}