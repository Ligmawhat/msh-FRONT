import { combineReducers } from "redux"
import { chatReducer } from "../chatReducer"
import { eventReducer } from "../eventReducer"
import { messageReducer } from "../messageReducer"
import { userReducer } from "../userReducer"
import { filterReducer } from "./../filterReducer"

export const rootReducer = combineReducers({
  events: eventReducer,
  user: userReducer,
  chat: chatReducer,
  message: messageReducer,
  filters: filterReducer,
})
