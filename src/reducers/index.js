import { combineReducers } from "redux";
import { cantReducer } from "./cantReducer";
import { quoteReducer } from "./quoteReducer";

export default combineReducers({ cantReducer, quoteReducer });
