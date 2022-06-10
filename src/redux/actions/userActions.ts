import { UserActions } from "../../models/redux"
import { IUser } from "../../models/user"

export const ACTION_setUser = (user: IUser) => ({
  type: UserActions.SET_USER,
  payload: user,
})
