const initialState = {
  profileSlopeValue: -1.5,
  laneOffsetValue: 3.5,
  additionalSlopeValue: 1,
  normalCrownSlope: -2,
  fullSuperSlope: 5,
  lengthOfCant: 40
};

export const cantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SLOPE_VALUE":
      return {
        ...state,
        profileSlopeValue: action.slopeValue
      };
    case "UPDATE_OFFSET_VALUE":
      return {
        ...state,
        laneOffsetValue: action.offsetValue
      };
    case "UPDATE_NORMAL_SLOPE":
      return {
        ...state,
        normalCrownSlope: action.normalCrownSlope
      };
    case "UPDATE_FULL_SLOPE":
      return {
        ...state,
        fullSuperSlope: action.fullSuperSlope
      };
    case "UPDATE_LEGTH_CANT":
      return {
        ...state,
        lengthOfCant: action.lengthOfCant
      };
    case "UPDATE_ADDITIONAL_SLOPE":
      return { ...state, additionalSlopeValue: action.additionalSlope };
    default:
      return state;
  }
};
