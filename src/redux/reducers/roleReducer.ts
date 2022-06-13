import { AnyAction } from "redux"
import { Role } from "../../models/redux"
import { initState } from "../init/initState"

export const roleReducer = (state = initState.role, action: AnyAction) => {
  switch (action.type) {
    case Role.SET_ROLE:
      return action.payload
    default:
      return state
  }
}
