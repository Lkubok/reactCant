const initialState = { leftEdgeSlope: 0, rightEdgeSlope: 0 };

export const cantParams = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LEFT_EDGE":
      return { ...state, leftEdgeSlope: action.leftSlope };
    case "UPDATE_RIGHT":
      return { ...state, rightEdgeSlope: action.rightSlope };
    default:
      return state;
  }
};
