import { combineReducers } from "redux"
import { chatReducer } from "../chatReducer"
import { isThemeBlackReducer } from "../isThemeBlackReducer"
import { messageReducer } from "../messageReducer"
import { userReducer } from "../userReducer"
import { filterReducer } from "./../filterReducer"

export const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  message: messageReducer,
  filters: filterReducer,
  isThemeBlack: isThemeBlackReducer,
})
