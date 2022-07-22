import { combineReducers } from "redux";
import { fetchTheSingleUser, fetchTheUser } from "./index";

export const rootReducer=combineReducers({
    fetchTheUser,
    fetchTheSingleUser
})