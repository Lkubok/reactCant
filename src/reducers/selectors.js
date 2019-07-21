import { createSelector } from "reselect";

export const getProfileSlopeValue = state =>
  state.cantReducer.profileSlopeValue;
export const getLaneOffsetValue = state => state.cantReducer.laneOffsetValue;
export const getNormalCrownSlope = state => state.cantReducer.normalCrownSlope;
export const getFullSuperSlope = state => state.cantReducer.fullSuperSlope;
export const getLengthOfCant = state => state.cantReducer.lengthOfCant;
export const getSide = state => state.paramsReducer.side;
export const getDesignSpeedValue = state => state.cantReducer.designSpeed;
export const getTasks = state => state.taskReducer.tasks;

export const addEdgeSelector = createSelector(
  getLaneOffsetValue,
  getNormalCrownSlope,
  getFullSuperSlope,
  getLengthOfCant,
  (lane, normal, full, length) => {
    return (
      Math.round(
        (((Math.abs(normal) + Math.abs(full)) * lane) / length) * 1000
      ) / 1000
    );
  }
);

const getSecondArg = (_state, arg) => arg;

export const sideSlopeSelector = createSelector(
  getSide,
  getProfileSlopeValue,
  addEdgeSelector,
  getSecondArg,
  (side, profile, addSlope, argSide) => {
    if (side === argSide) return Math.round((profile - addSlope) * 1000) / 1000;
    return Math.round((profile + addSlope) * 1000) / 1000;
  }
);

export const awaitedSlopeValue = createSelector(
  addEdgeSelector,
  getProfileSlopeValue,
  (additional, profile) => {
    return (
      Math.sign(profile) *
      (Math.round((Math.abs(additional) * 2 + 0.2) * 1000) / 1000)
    );
  }
);

export const getTasksSelector = createSelector(
  getTasks,
  tasks => {
    return tasks;
  }
);
