import * as actionTypes from '../constants/action-types';
import data from '../state/flights';

let initialSelectedCarriers = {};

data.flights.forEach(({carrier}) => {
  initialSelectedCarriers[carrier] = carrier;
});

const initialState = {
  showDropdown: false,
  selectedCarriers: initialSelectedCarriers
};

const setSelectedCarriers = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_CARRIERS: {
      let newState = Object.assign({}, state);
      let newStateList = Object.keys(newState);
      let carrierInState = newState[action.id];

      if (carrierInState && newStateList.length > 1) {
        delete newState[action.id];
      } else {
        newState[action.id] = action.id;
      }

      return newState;
    }

    default:
      return state;
  }
}

const setVisibilityDropdown = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_COMBO_DROPDOWN:
      return action.dropdownVisibilityState
    default:
      return state;
  }
};

export default (state = initialState, action) => {
  return Object.assign({}, state, {
    showDropdown: setVisibilityDropdown(state.showDropdown, action),
    selectedCarriers: setSelectedCarriers(state.selectedCarriers, action)
  });
};