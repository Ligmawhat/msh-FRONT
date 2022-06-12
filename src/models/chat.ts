import { IListOfUsers } from "./listOfUsers"
import { IMessage } from "./message"

export interface IChat {
  id: number
  type: string
  content: IMessage[]
  listOfUsers: IListOfUsers[]
}
