import { AppDispatch, ChatActions, MessageActions } from "../models/redux"

import {
  ACTION_create_chat_socket,
  ACTION_give_chat_socket,
  ACTION_send_message_socket,
} from "../redux/actions/socketActions"

export const createSocketOnMessage =
  (dispatch: AppDispatch) => (event: any) => {
    const parsedData = JSON.parse(event.data)
    switch (parsedData.type) {
      case MessageActions.SEND_MESSAGE_SOCKET:
        dispatch(ACTION_send_message_socket(parsedData.payload))
        break
      case ChatActions.CREATE_CHAT_SOCKET:
        dispatch(ACTION_give_chat_socket(parsedData.payload))
        break
      case ChatActions.GIVE_CHAT_SOCKET:
        dispatch(ACTION_create_chat_socket(parsedData.payload))
        break

      default:
        break
    }
  }
