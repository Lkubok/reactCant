import { initialParams } from "./initialParams";

export const cantReducer = (state = initialParams, action) => {
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
    default:
      return state;
  }
};
