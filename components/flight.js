import React, { Component } from 'react';
import Moment from 'moment';

export default class FlightView extends Component {
  render() {
    const {
      id,
      arrival,
      departure,
      direction: {from, to},
      carrier,
      className = ''
    } = this.props;

    const outputDateFormat = 'MMMM Do YYYY, HH:mm';
    const arrivalDate = Moment(arrival);
    const departureDate = Moment(departure);
    const b = 'flight';

    return (
      <div className = {`${b} ${className}`} data-flight-id={id}>
        <div className = {`${b}__direction`}> From <span className = {`${b}__direction-value`}>{from}</span> to <span className = {`${b}__direction-value`}>{to}</span></div>
        <div className = {`${b}__arrival`}> {`Arrival: ${arrivalDate.format(outputDateFormat)}`} </div>
        <div className = {`${b}__departure`}> {`Departure: ${departureDate.format(outputDateFormat)}`} </div>
        <div className = {`${b}__carrier`}> {`Carrier: ${carrier}`} </div>
      </div>
    );
  }
}