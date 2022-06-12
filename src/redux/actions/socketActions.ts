import { IChat } from "../../models/chat"
import { IMessage } from "../../models/message"
import { ChatActions, MessageActions } from "../../models/redux"

export const ACTION_send_message_socket = (messageData: IMessage) => ({
  type: MessageActions.SEND_MESSAGE_SOCKET,
  payload: messageData,
})
export const ACTION_create_chat_socket = (chatInfo: IChat) => ({
  type: ChatActions.GIVE_CHAT_SOCKET,
  payload: chatInfo,
})
export const ACTION_give_chat_socket = (chatInfo: IChat) => ({
  type: ChatActions.CREATE_CHAT_SOCKET,
  payload: chatInfo,
})
