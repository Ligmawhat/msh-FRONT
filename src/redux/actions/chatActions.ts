import axios from "axios"
import { IChat } from "../../models/chat"
import { AppDispatch, ChatActions } from "../../models/redux"

export const ACTION_get_all_chats = () => async (dispatch: AppDispatch) => {
  const response = await axios.post("http://localhost:3001/chat")

  dispatch({
    type: ChatActions.GIVE_CHATS,
    payload: response.data,
  })
}
