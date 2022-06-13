import { AnyAction } from "redux"
import { UserActions } from "../../models/redux"
import { initState } from "../init/initState"

export const userReducer = (state = initState.user, action: AnyAction) => {
  switch (action.type) {
    case UserActions.SET_USER:
      return action.payload

    case UserActions.UNSET_USER:
      return null
    case UserActions.UNSET_USER:
      return null
    default:
      return state
  }
}
