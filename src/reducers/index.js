import { combineReducers } from "redux";
import { cantReducer } from "./cantReducer";
import { quoteReducer } from "./quoteReducer";
import { cantParams } from "./cantParams";

export default combineReducers({ cantReducer, quoteReducer, cantParams });
