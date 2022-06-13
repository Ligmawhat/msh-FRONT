import { CurrUserActions } from "../../models/redux"

export const ACTION_setCurrUser = (id: any, email: any) => ({
  type: CurrUserActions.SET_CURR_USER,
  payload: { id, email },
})

export function setCurrUser(id: any, email: any) {
  return async (dispatch: any) => {
    dispatch(currUser(id, email))
  }
}

export const currUser = (id: any, email: any) => ({
  type: CurrUserActions.SET_CURR_USER,
  payload: { id, email },
})

export function logoutUser() {
  return async (dispatch: any) => {
    dispatch(logout())
  }
}

export const logout = () => ({
  type: CurrUserActions.LOGOUT_USER,
})
