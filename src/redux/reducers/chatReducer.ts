import { AnyAction } from "redux"
import { IChat } from "../../models/chat"
import { ChatActions } from "../../models/redux"
import { initState } from "../init/initState"

export const chatReducer = (
  state: IChat[] | null = initState.chat,
  action: AnyAction,
) => {
  switch (action.type) {
    case ChatActions.CREATE_CHAT_SOCKET:
      if (state != null) {
        return [...state, action.payload]
      } else {
        return state
      }

    default:
      return state
  }
}
