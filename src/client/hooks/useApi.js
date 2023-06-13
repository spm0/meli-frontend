import { useEffect, useReducer } from "react";
import { apiReducer, initialState } from "../reducers/api";
import ACTIONS from "../actions/api";

export const useApi = (callback) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await callback();
        dispatch({ type: ACTIONS.SET_DATA, payload: data });
      } catch (e) {
        dispatch({ type: ACTIONS.SET_ERROR });
        console.error(e);
      }
    };

    getData();
  }, [callback]);

  return state;
};
