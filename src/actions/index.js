export const updateQuote = (quote, author) => ({
  type: "UPDATE_QUOTE",
  quote,
  author
});
export const addQuote = (quote, author) => ({
  type: "ADD_QUOTE",
  quote,
  author
});
