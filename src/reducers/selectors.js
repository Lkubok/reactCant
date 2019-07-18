import { createSelector } from "reselect";

export const getProfileSlopeValue = state =>
  state.cantReducer.profileSlopeValue;
export const getLaneOffsetValue = state => state.cantReducer.laneOffsetValue;
export const getNormalCrownSlope = state => state.cantReducer.normalCrownSlope;
export const getFullSuperSlope = state => state.cantReducer.fullSuperSlope;
export const getLengthOfCant = state => state.cantReducer.lengthOfCant;
export const getSide = state => state.paramsReducer.side;

export const resultSelector = createSelector(
  getLaneOffsetValue,
  getNormalCrownSlope,
  getFullSuperSlope,
  getLengthOfCant,
  (lane, normal, full, length) => {
    return (
      Math.round(
        (((Math.abs(normal) + Math.abs(full)) * lane) / length) * 100
      ) / 100
    );
  }
);

const getSecondArg = (_state, arg) => arg;

export const sideSlopeSelector = createSelector(
  getSide,
  getProfileSlopeValue,
  resultSelector,
  getSecondArg,
  (side, profile, addSlope, argSide) => {
    if (side === argSide) return Math.round((profile - addSlope) * 100) / 100;
    return Math.round((profile + addSlope) * 100) / 100;
  }
);
