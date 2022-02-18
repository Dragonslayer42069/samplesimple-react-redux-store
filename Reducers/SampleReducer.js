const initialState = {
  sampleArray: [],

};

export default (state = initialState,
  { type, payload }) => {
  switch (type) {

    case "SET_SAMPLEACTION":
      return {
        ...state,
        sampleArray: payload
      };

    default:
      return state;
  }
};
