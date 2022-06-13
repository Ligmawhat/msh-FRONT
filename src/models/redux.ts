import { store } from "../redux/store/store"
import { IChat } from "./chat"
import { IEvent } from "./event"
import { IMessage } from "./message"
import { IUser } from "./user"

export interface IAction {
  type: string
  payload?: any
}

export enum Role {
  SET_ROLE = "SET_ROLE",
}

export enum CurrUserActions {
  SET_CURR_USER = "SET_CURR_USER",
  LOGOUT_USER = "LOGOUT_USER",
  SET_ROLE = "SET_ROLE",
}

export enum filterType {
  buttons = "BUTTONS",
  search = "SEARCH",
  checkbox = "CHECKBOX",
  select = "SELECT",
}

export enum urgencyType {
  urgent = "URGENT",
  week = "WEEK",
  month = "MONTH",
}

export type oneFilter = {
  name: string
  value: string | null | category[]
  title: string
  type: filterType
}

export interface IInitState {
  user: IUser | null
  currUser: any
  role: any
  filters: oneFilter[]
  chat: IChat[] | null
  message: IMessage[] | null
  events: IEvent[]
  isThemeBlack: boolean
}

export enum UserActions {
  SET_USER = "SET_USER",
  UNSET_USER = "UNSET_USER",
}

export enum FilterActions {
  SET_FILTERS = "SET_FILTERS",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
}

export enum ThemeActions {
  THEME_BLACK = "THEME_BLACK",
  THEME_WHITE = "THEME_WHITE",
}

export enum ChatActions {
  CREATE_CHAT_SOCKET = "CREATE_CHAT_SOCKET",
  GIVE_CHAT_SOCKET = "GIVE_CHAT_SOCKET",
}

export enum MessageActions {
  SEND_MESSAGE_SOCKET = "SEND_MESSAGE_SOCKET",
}

export enum EventActions {
  SET_EVENTS = "SET_EVENTS",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
}

export type category = {
  name: string
  active: boolean
  title: string
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
