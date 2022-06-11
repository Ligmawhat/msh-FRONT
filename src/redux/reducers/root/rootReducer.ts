import { combineReducers } from "redux"
import { userReducer } from "../userReducer"
import { filterReducer } from "./../filterReducer"

export const rootReducer = combineReducers({
  user: userReducer,
  filters: filterReducer,
})
