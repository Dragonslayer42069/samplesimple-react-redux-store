import { ActionTypes } from "./ActionTypes";

export const sampleAction = () => {

    return async (dispatch, getState) => {
        console.log("Sample Action")
      dispatch({
        type: ActionTypes.SET_SAMPLEACTION,
         payload: "payload" 
      });
    };
  };