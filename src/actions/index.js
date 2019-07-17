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
export const updateAdditionalSlope = additionalSlope => ({
  type: "UPDATE_ADDITIONAL_SLOPE",
  additionalSlope
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
