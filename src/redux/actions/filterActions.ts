import axios from "axios"
import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"
// import { categories } from "../../mocks/events"
import {
  oneFilter,
  FilterActions,
  AppDispatch,
  filterType,
  RootState,
  category,
} from "../../models/redux"

export const setLoading = () => ({
  type: FilterActions.SET_LOADING,
})

export const setError = (error: unknown) => ({
  type: FilterActions.SET_ERROR,
  payload: error,
})

export const ACTION_setFilters = (filters: oneFilter[]) => ({
  type: FilterActions.SET_FILTERS,
  payload: filters,
})

export const getFilters =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    try {
      dispatch(setLoading())

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/event/getAllCategories`,
        { withCredentials: true },
      )
      console.log(response)
      const categoriesResponse = response.data.allCategories
      const categories: category[] = categoriesResponse.map(
        (el: { value: any }, index: any) => {
          return { activity: false, name: el.value, title: el.value }
        },
      )
      // const categories = response.data
      const filters = [
        {
          name: "category",
          value: categories,
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
      ]

      dispatch(ACTION_setFilters(filters))
    } catch (error) {
      dispatch(setError(error))
    }
  }
