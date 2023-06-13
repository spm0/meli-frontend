import ACTIONS from "../actions/api";

export const initialState = {
  loading: true,
  error: false,
  data: null,
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {
        ...initialState,
        loading: false,
        data: action.payload,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...initialState,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
