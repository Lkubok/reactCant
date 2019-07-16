const initialState = { profileSlopeValue: 0 };

export const cantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SLOPE_VALUE":
      return { ...state, profileSlopeValue: action.slopeValue };
    default:
      return state;
  }
};
