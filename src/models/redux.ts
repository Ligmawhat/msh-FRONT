import { rootReducer } from "../redux/reducers/root/rootReducer"
import { store } from "../redux/store/store"
import { IUser } from "./user"

export interface IAction {
  type: string
  payload?: any
}

export enum filterType {
  buttons = "BUTTONS",
  search = "SEARCH",
  checkbox = "CHECKBOX",
}
export type oneFilter = {
  name: string
  value: string | null | category[]
  title: string
  type: filterType
}
export interface IInitState {
  user: IUser | null
  filters: oneFilter[]
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

export type category = {
  name: string
  active: boolean
  title: string
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
