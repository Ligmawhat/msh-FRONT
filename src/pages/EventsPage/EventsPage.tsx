import React, { FC } from "react"
import "./EventsPage.scss"
import Button from "../../components/Button/Button"
import { mockEvents } from "../../mocks/events"

const filterUrl =
  "https://cdn0.iconfinder.com/data/icons/glyphpack/36/filter-512.png"

const EventsPage: FC = () => {
  return (
    <div className="events">
      <aside className="events__left filters">
        <div className="filters__item">
          <img src={filterUrl} alt="filter icon" className="filters__icon" />
          <button className="filters__button">Категории</button>
        </div>
        <div className="filters__item">
          <img src={filterUrl} alt="filter icon" className="filters__icon" />
          <button className="filters__button">Местоположение</button>
        </div>
        <div className="filters__item">
          <img src={filterUrl} alt="filter icon" className="filters__icon" />
          <button className="filters__button">Срочно</button>
        </div>
      </aside>
      <div className="events__mid">
        <div className="events__list">
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
      </div>
      <aside className="events__right">Тут карта</aside>
    </div>
  )
}

export default EventsPage
