import { AnyAction } from "redux"
import { CurrUserActions } from "../../models/redux"
import { initState } from "../init/initState"

export const currUserReducer = (
  state = initState.currUser,
  action: AnyAction,
) => {
  switch (action.type) {
    case CurrUserActions.SET_CURR_USER:
      return action.payload
    default:
      return state
  }
}
