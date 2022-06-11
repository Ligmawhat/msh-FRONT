import { AnyAction } from 'redux';
import { FilterActions, IInitState } from "../../models/redux"
import { initState } from "../init/initState"

export const filterReducer = (
  state: IInitState = initState,
  action: AnyAction,
) => {
  switch (action.type) {
    case FilterActions.SET_FILTERS:
      return action.payload

    default:
      return state
  }
}
  