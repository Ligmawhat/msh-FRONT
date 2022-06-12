import React, { FC } from "react"
import "./EventsPage.scss"
import Button from "../../components/common/Button/Button"
import EventsFilter from "../../components/EventsFilter/EventsFIlter"
import { mockEvents } from "../../mocks/events"

const filterUrl =
  "https://cdn0.iconfinder.com/data/icons/glyphpack/36/filter-512.png"

const EventsPage: FC = () => {
  return (
    <div className="events">
      <aside className="events__left filters">
        <EventsFilter />
      </aside>
      <div className="events__mid">
        {mockEvents &&
          mockEvents.map((el) => (
            <div key={el.id} className="events__item event">
              <div className="event__top">
                <div className="event__title">{el.title}</div>
                <div className="event__subtitle">{el.category}</div>
              </div>
              <div className="event__mid">
                <img src={el.img} alt="event image" className="event__img" />
              </div>
              <div className="event__bottom">
                <div className="event__date">{el.date_and_time}</div>
                <div className="event__tags">
                  {el.tags.map((tag, i) => (
                    <div key={i} className="event__tag">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="events__button">
                <Button text={"Помочь"} onClick={() => null} />
              </div>
            </div>
          ))}
      </div>
      <aside className="events__right">Тут карта</aside>
    </div>
  )
}

export default EventsPage
