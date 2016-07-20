import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import ComboView from '../components/combo';
import { uniqBy } from 'lodash';

const getComboList = (flights, selectedCarriers) => {

  return uniqBy(flights
    .map(({carrier}) => ({name: carrier, isSelected: !!selectedCarriers[carrier]})), 'name')
};

const getButtonValue = (selectedCarriers, comboList) => {
  const selectedCarriersList = Object.keys(selectedCarriers);

  if (selectedCarriersList.length === 0) {
    return 'Пустой список';
  } else if (selectedCarriersList.length === comboList.length) {
    return 'Все авиакомпании';
  } else {
    return selectedCarriersList.join(', ');
  }
};

const mapStateToProps = (state) => {
  const {
    flights,
    combo,
    combo: {selectedCarriers}
  } = state;
  
  const comboList = getComboList(flights, selectedCarriers);

  return {
    combo,
    comboList,
    buttonValue: getButtonValue(selectedCarriers, comboList)
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const Combo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComboView);

export default Combo;