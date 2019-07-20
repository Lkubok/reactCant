import axios from "axios";
import { initialParams } from "../reducers/initialParams";

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

export const updateProfileSlopeValue = slopeValue => ({
  type: "UPDATE_SLOPE_VALUE",
  slopeValue
});
export const updateOffsetValue = offsetValue => ({
  type: "UPDATE_OFFSET_VALUE",
  offsetValue
});
export const updateNormalCrown = normalCrownSlope => ({
  type: "UPDATE_NORMAL_SLOPE",
  normalCrownSlope
});
export const updateFullCrown = fullSuperSlope => ({
  type: "UPDATE_FULL_SLOPE",
  fullSuperSlope
});
export const updateLengthOfCant = lengthOfCant => ({
  type: "UPDATE_LEGTH_CANT",
  lengthOfCant
});
export const updateLeftEdge = leftEdgeSlope => ({
  type: "UPDATE_LEFT_EDGE",
  leftEdgeSlope
});
export const updateRightEdge = rightEdgeSlope => ({
  type: "UPDATE_RIGHT_EDGE",
  rightEdgeSlope
});
export const updateSide = side => ({
  type: "UPDATE_SIDE",
  side
});
/* export const updateQuoteTwo = (dispatch, quote) => {
  axios
    .get("https://hangmann-backend.herokuapp.com/api/quotes/random")
    .then(response =>
      dispatch(
        updateQuote(response.data[0].quote, response.data[0].quoteAuthor)
      )
    );
}; */

/* export const updateQuoteTwo = (dispatch, quote) => {
  axios
    .get("https://hangmann-backend.herokuapp.com/api/quotes/random")
    .then(response =>
      dispatch(
        updateQuote(response.data[0].quote, response.data[0].quoteAuthor)
      )
    );
}; */

// THUNK !!!!!!

export const updateQuoteTwo = quote => dispatch => {
  dispatch(updateQuote("Loading..."));
  axios
    .get("https://hangmann-backend.herokuapp.com/api/quotes/random")
    .then(response =>
      dispatch(
        updateQuote(response.data[0].quote, response.data[0].quoteAuthor)
      )
    );
};

export const updateAtLaunch = arrayWithUpdates => dispatch => {
  console.log(arrayWithUpdates);
  dispatch(updateNormalCrown(arrayWithUpdates.normal));
  dispatch(updateFullCrown(arrayWithUpdates.full));
  dispatch(updateLengthOfCant(arrayWithUpdates.length));
  dispatch(updateOffsetValue(arrayWithUpdates.lane));
  dispatch(updateProfileSlopeValue(arrayWithUpdates.profile));
};

export const restoreAll = initialParams => dispatch => {
  const {
    profileSlopeValue: profile,
    laneOffsetValue: lane,
    normalCrownSlope: normal,
    fullSuperSlope: full,
    lengthOfCant: length
  } = initialParams;

  console.log("resseting");
  dispatch(updateNormalCrown(normal));
  dispatch(updateFullCrown(full));
  dispatch(updateLengthOfCant(length));
  dispatch(updateOffsetValue(lane));
  dispatch(updateProfileSlopeValue(profile));
};

// TESTING SECTION...

export const restoreAll2 = params => {
  console.log("skcja");
};
