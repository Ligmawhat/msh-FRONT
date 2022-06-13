import { combineReducers } from "redux"
import { chatReducer } from "../chatReducer"
import { currUserReducer } from "../currUserReducer"
import { messageReducer } from "../messageReducer"
import { userReducer } from "../userReducer"
import { filterReducer } from "./../filterReducer"

export const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  message: messageReducer,
  filters: filterReducer,
  currUser: currUserReducer,
})
