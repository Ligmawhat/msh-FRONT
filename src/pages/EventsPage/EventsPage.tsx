import React, { FC } from "react"
import "./EventsPage.scss"

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
      <div className="events__mid"></div>
      <aside className="events__right">Тут карта</aside>
    </div>
  )
}

export default EventsPage
