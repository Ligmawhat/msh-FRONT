import { AnyAction } from "redux"
import { FilterActions, IInitState } from "../../models/redux"
import { initState } from "../init/initState"

export const filterReducer = (
  state: IInitState = initState,
  // eslint-disable-next-line prettier/prettier
  action: AnyAction
) => {
  switch (action.type) {
    case FilterActions.SET_FILTERS:
      return action.payload

    default:
      return state
  }
}
