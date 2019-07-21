import { combineReducers } from "redux";
import { cantReducer } from "./cantReducer";
import { quoteReducer } from "./quoteReducer";
import { paramsReducer } from "./paramsReducer";
import { taskReducer } from "./taskReducer";

export default combineReducers({
  cantReducer,
  quoteReducer,
  paramsReducer,
  taskReducer
});
