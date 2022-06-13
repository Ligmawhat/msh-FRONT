import React, { FC, useEffect } from "react"
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
  const dispatch = useAppDispatch()
  const allEvents: IEvent[] = useAppSelector((state) => state.events)

  useEffect(() => {
    dispatch(getEvents(filters))
  }, [filters])
  const isThemeBlack = useAppSelector((s) => s.isThemeBlack)
  return (
    <div className="events">
      <aside className={`events__left filters ${isThemeBlack && "_black"}`}>
        <EventsFilter />
      </aside>
      <div className={`events__mid ${isThemeBlack && "_black-light"}`}>
        {allEvents &&
          allEvents.map((el) => (
            <div key={el.id} className={`event ${isThemeBlack && "_black"}`}>
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
                {/* <div className="event__tags">
                  {el.tags.map((tag, i) => (
                    <div
                      key={i}
                      className={`event__tag ${isThemeBlack && "_black-light"}`}
                    >
                      {tag}
                    </div>
                  ))} 
                </div> */}
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
