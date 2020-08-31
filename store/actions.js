export const TOGGLE_DATA_FETCH = 'TOGGLE_DATA_FETCH';
export const toggleDataFetch = (status) => {
  return {type: TOGGLE_DATA_FETCH, payload: status};
};

export const TOGGLE_ERROR = 'TOGGLE_ERROR';
export const toggleError = (status) => {
  return {type: TOGGLE_ERROR, payload: status};
};
