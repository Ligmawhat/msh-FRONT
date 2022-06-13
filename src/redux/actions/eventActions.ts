import axios from "axios"
import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"
import { IEvent } from "../../models/event"
import { EventActions, oneFilter, RootState } from "../../models/redux"

export const setLoading = () => ({
  type: EventActions.SET_LOADING,
})

export const setError = (error: unknown) => ({
  type: EventActions.SET_ERROR,
  payload: error,
})

export const ACTION_setEvents = (events: IEvent[]) => ({
  type: EventActions.SET_EVENTS,
  payload: events,
})

export const getEvents =
  (filters?: oneFilter[]): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      console.log("FIIILTERS", filters)
      dispatch(setLoading())
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_CLIENT_URL}/event/getAllEvents`,
        data: { filters },
        withCredentials: true,
      })
      // const response = await axios.get(
      //   `${process.env.REACT_APP_API_URL}/event/getAllEvents`,
      //   { withCredentials: true },
      // )
      const eventsResponse = response.data.allEvents
      const events: IEvent[] = eventsResponse.map((el: any, index: any) => {
        return { ...el } as IEvent
      })

      dispatch(ACTION_setEvents(events))
    } catch (error) {
      dispatch(setError(error))
    }
  }
