import { Role } from "../../models/redux"

export const ACTION_setRole = (value: string) => ({
  type: Role.SET_ROLE,
  payload: value,
})
