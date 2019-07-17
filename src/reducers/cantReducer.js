const initialState = {
  profileSlopeValue: -1.5,
  laneOffsetValue: 3.5,
  additionalSlopeValue: 1,
  normalCrownSlope: -2,
  fullSuperSlope: 5,
  lengthOfCant: 40
};

export const cantReducer = (state = initialState, action) => {
  const {
    normalCrownSlope: normal,
    fullSuperSlope: full,
    lengthOfCant: length,
    laneOffsetValue: lane
  } = state;

  const addSlope = ((Math.abs(normal) + Math.abs(full)) * lane) / length;

  switch (action.type) {
    case "UPDATE_SLOPE_VALUE":
      return {
        ...state,
        profileSlopeValue: action.slopeValue,
        additionalSlopeValue: addSlope
      };
    case "UPDATE_OFFSET_VALUE":
      return {
        ...state,
        laneOffsetValue: action.offsetValue,
        additionalSlopeValue: addSlope
      };
    case "UPDATE_NORMAL_SLOPE":
      return {
        ...state,
        normalCrownSlope: action.normalCrownSlope,
        additionalSlopeValue: addSlope
      };
    case "UPDATE_FULL_SLOPE":
      return {
        ...state,
        fullSuperSlope: action.fullSuperSlope,
        additionalSlopeValue: addSlope
      };
    case "UPDATE_LEGTH_CANT":
      return {
        ...state,
        lengthOfCant: action.lengthOfCant,
        additionalSlopeValue: addSlope
      };
    default:
      return state;
  }
};
