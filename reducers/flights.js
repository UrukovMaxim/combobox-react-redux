import data from '../state/flights';

const initialState = data.flights.sort((firstFlight, secondFlight) => {
  const firstCarrier = firstFlight.carrier.toLowerCase();
  const secondCarrier = secondFlight.carrier.toLowerCase();

  if (firstCarrier < secondCarrier) {
    return -1;
  } else if (firstCarrier > secondCarrier) {
    return 1;
  } else {
    return 0;
  }
});

export default (state = initialState) => [...state];