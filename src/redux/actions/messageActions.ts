import axios from "axios"
import { IChat } from "../../models/chat"
import { AppDispatch, MessageActions } from "../../models/redux"

export const ACTION_send_message =
  (content: string) => async (dispatch: AppDispatch) => {
    const response = await axios.post("http://localhost:3001/chat/message", {
      content,
    })

    dispatch({
      type: MessageActions.SEND_MESSAGE,
      payload: response.data,
    })
  }
