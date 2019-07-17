import { combineReducers } from "redux";
import { cantReducer } from "./cantReducer";
import { quoteReducer } from "./quoteReducer";
import { paramsReducer } from "./paramsReducer";

export default combineReducers({ cantReducer, quoteReducer, paramsReducer });
