import { AnyAction } from "redux"
import { IMessage } from "../../models/message"
import { MessageActions } from "../../models/redux"
import { initState } from "../init/initState"

export const messageReducer = (
  state: IMessage[] | null = initState.message,
  action: AnyAction,
) => {
  switch (action.type) {
    case MessageActions.SEND_MESSAGE_SOCKET:
      if (state != null) {
        return [...state, action.payload]
      } else {
        return state
      }

    case MessageActions.SEND_MESSAGE:
      if (state != null) {
        return [...state, action.payload]
      } else {
        return state
      }

    default:
      return state
  }
}
