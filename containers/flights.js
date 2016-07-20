import { connect } from 'react-redux';
import FlightsView from '../components/flights';

const getFlights = (state) => {
  return state.flights.filter((flight) => {
    return state.combo.selectedCarriers[flight.carrier];
  })
}

const mapStateToProps = (state) => {
  return {
    flights: getFlights(state)
  }
}

const Flights = connect(
  mapStateToProps
)(FlightsView);

export default Flights;