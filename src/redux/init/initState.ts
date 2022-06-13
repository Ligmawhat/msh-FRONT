import { filterType, IInitState } from "../../models/redux"

export const initState: IInitState = {
  user: null,
  currUser: null,
  chat: null,
  events: [],
  message: null,
  isThemeBlack: false,
  filters: [
    {
      name: "category",
      value: null,
      title: "Категории",
      type: filterType.buttons,
    },
    {
      name: "location",
      value: null,
      title: "Местоположение",
      type: filterType.search,
    },
    {
      name: "urgency",
      value: null,
      title: "Срочность",
      type: filterType.select,
    },
  ],
}
