import {TOGGLE_DATA_FETCH, TOGGLE_ERROR} from './actions';
import {act} from 'react-test-renderer';

const initialState = {
  isLoading: true,
  isError: false,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DATA_FETCH:
      return {...state, isLoading: action.payload};
    case TOGGLE_ERROR:
      return {...state, isError: action.payload};
    default:
      return state;
  }
};

export default Reducer;
