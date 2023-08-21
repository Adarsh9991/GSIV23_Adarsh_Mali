import { combineReducers } from "@reduxjs/toolkit";
import { selectedItemReducer, selectedSearchReducer } from "./reducers"; // Import your reducer here

const rootReducer = combineReducers({
  selectedItem: selectedItemReducer,
  selectedSearch: selectedSearchReducer,
});

export default rootReducer;
