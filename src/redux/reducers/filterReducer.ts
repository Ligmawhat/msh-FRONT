import { AnyAction } from "redux"
import { FilterActions } from "../../models/redux"
import { initState } from "../init/initState"

export const filterReducer = (state = initState.filters, action: AnyAction) => {
  switch (action.type) {
    case FilterActions.SET_FILTERS:
      return action.payload

    default:
      return state
  }
}
