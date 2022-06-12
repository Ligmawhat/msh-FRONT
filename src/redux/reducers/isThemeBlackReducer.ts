import { AnyAction } from "redux"
import { ThemeActions } from "../../models/redux"
import { initState } from "../init/initState"

export const isThemeBlackReducer = (
  state = initState.isThemeBlack,
  action: AnyAction,
) => {
  switch (action.type) {
    case ThemeActions.THEME_WHITE:
      return false
    case ThemeActions.THEME_BLACK:
      return true

    default:
      return state
  }
}
