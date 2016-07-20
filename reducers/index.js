import { combineReducers } from 'redux';
import combo from './combo';
import flights from './flights';

const rootReducer = combineReducers({
  combo,
  flights
});

export default rootReducer;