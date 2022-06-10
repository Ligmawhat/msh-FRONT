import { rootReducer } from "../redux/reducers/root/rootReducer"
import { store } from "../redux/store/store"
import { IUser } from "./user"

export interface IAction {
  type: string
  payload?: any
}

export interface IInitState {
  user: IUser | null
}

export enum UserActions {
  SET_USER = "SET_USER",
  UNSET_USER = "UNSET_USER",
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
