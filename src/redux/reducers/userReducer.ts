import { IAction, IInitState, UserActions } from "../../models/redux"
import { initState } from "../init/initState"

export const userReducer = (state: IInitState = initState, action: IAction) => {
  switch (action.type) {
    case UserActions.SET_USER:
      return action.payload

    case UserActions.UNSET_USER:
      return null

    default:
      return state
  }
}
