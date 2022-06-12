import { filterType, IInitState } from "../../models/redux"

export const initState: IInitState = {
  user: null,
  filters: [
    {
      name: "categories",
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
      name: "urgent",
      value: null,
      title: "Срочность",
      type: filterType.checkbox,
    },
  ],
}
