const initialState = {
  mainQuote: { quote: "", author: "" },
  additionalQuotes: []
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_QUOTE":
      return {
        ...state,
        mainQuote: { quote: action.quote, author: action.author }
      };
    case "ADD_QUOTE":
      return {
        ...state,
        additionalQuotes: [...state.additionalQuotes, action.quote]
      };
    default:
      return state;
  }
};
