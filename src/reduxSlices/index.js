import { combineReducers } from "@reduxjs/toolkit";
import business from "../reduxSlices/BusinessSlice";
import position from "../reduxSlices/PositionSlice";

export default combineReducers({ business, position });
