import React, { Component } from 'react';
import FlightView from './flight';

export default class FlightsView extends Component {
  render() {
    const {
      flights,
      className = ''
    } = this.props;

    const b = 'flights'
    return (
      <div className = {`${b} ${className}`}>
        {
          flights.map((flight)=> {
            return <FlightView
                className = {`${b}__flight`}
                key={flight.id} 
                {...flight}/>;
          })
        }
      </div>
    );
  }
}