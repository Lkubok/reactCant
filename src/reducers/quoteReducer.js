const initialState = { info: ["info"] };

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INFO":
      return { ...state, info: ["updated info"] };
    default:
      return state;
  }
};
