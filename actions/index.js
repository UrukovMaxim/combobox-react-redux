import * as actionTypes from '../constants/action-types';

export const setSelectedComboItem = (id) => {
  return {
    type: actionTypes.SET_SELECTED_CARRIERS,
    id
  }
}

export const setVisibilityComboDropdown = (dropdownVisibilityState) => {
  return {
    type: actionTypes.SET_VISIBILITY_COMBO_DROPDOWN,
    dropdownVisibilityState
  }
}