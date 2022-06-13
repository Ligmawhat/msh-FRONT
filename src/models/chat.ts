import { IListOfUsers } from "./listOfUsers"
import { IMessage } from "./message"

export interface IChat {
  type: string
  content: IMessage[]
  listOfUsers: IListOfUsers[]
}
