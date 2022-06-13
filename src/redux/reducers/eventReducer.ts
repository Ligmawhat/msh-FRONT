import { AnyAction } from "redux"
import { EventActions, IInitState } from "../../models/redux"
import { initState } from "../init/initState"

export const eventReducer = (state = initState.events, action: AnyAction) => {
  switch (action.type) {
    case EventActions.SET_EVENTS:
      return action.payload

    default:
      return state
  }
}
