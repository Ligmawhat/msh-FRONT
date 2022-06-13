import React, { FC, useEffect, useMemo } from "react"
import "./EventsPage.scss"
import Button from "../../components/common/Button/Button"
import EventsMap from "../../components/common/EventsMap/EventsMap"
import EventsFilter from "../../components/EventsFilter/EventsFIlter"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { IEvent } from "../../models/event"
import { oneFilter } from "../../models/redux"
import { getEvents } from "../../redux/actions/eventActions"

const EventsPage: FC = () => {
  const filters: oneFilter[] = useAppSelector((state) => {
    return state.filters
  })
  let categoriesActive: boolean
  const dispatch = useAppDispatch()
  const allEvents: IEvent[] = useAppSelector((state) => state.events)

  useEffect(() => {
    dispatch(getEvents(filters))
  }, [filters])

  // const filteredEvents = useMemo(() => {
  //   return mockEvents.filter((el) => {
  //     if (
  //       filters.every((filt) => {
  //         if (Array.isArray(filt.value)) {
  //           categoriesActive = filt.value.every((elem) => !elem.active)
  //           return categoriesActive
  //         }
  //         return (
  //           filt.value == null ||
  //           filt.value === "Не выбрано" ||
  //           filt.value === ""
  //         )
  //       })
  //     ) {
  //       return true
  //     }
  //     for (const filt of filters) {
  //       if (Array.isArray(filt.value) && !categoriesActive) {
  //         const selectedFilters = (filt.value as category[])?.filter(
  //           (elem) => elem.active,
  //         )
  //         return selectedFilters.some((elem) => elem.title === el.category)
  //       }
  //     }
  //   })
  // }, [mockEvents, filters])

  return (
    <div className="events">
      <aside className="events__left filters">
        <EventsFilter />
      </aside>
      <div className="events__mid">
        {allEvents &&
          allEvents.map((el) => (
            <div key={el.id} className="events__item event">
              <div className="event__top">
                <div className="event__title">{el.title}</div>
                <div className="event__subtitle">{el.category}</div>
              </div>
              <div className="event__mid">
                <img
                  src={el.img_url}
                  alt="event image"
                  className="event__img"
                />
              </div>
              <div className="event__bottom">
                <div className="event__date">{el.date_and_time}</div>
                <div className="event__tags">
                  {/* {el.tags.map((tag, i) => (
                    <div key={i} className="event__tag">
                      {tag}
                    </div>
                  ))} */}
                </div>
              </div>
              <Button width={250} text={"Помочь"} onClick={() => null} />
            </div>
          ))}
      </div>
      <aside className="events__right">
        <EventsMap />
      </aside>
    </div>
  )
}

export default EventsPage
