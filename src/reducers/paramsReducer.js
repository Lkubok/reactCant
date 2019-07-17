const initialState = { leftEdgeSlope: 0, rightEdgeSlope: 0, side: "right" };

export const paramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LEFT_EDGE":
      return { ...state, leftEdgeSlope: action.leftSlope };
    case "UPDATE_RIGHT_EDGE":
      return { ...state, rightEdgeSlope: action.rightSlope };

    case "UPDATE_SIDE":
      return { ...state, side: action.side };
    default:
      return state;
  }
};
