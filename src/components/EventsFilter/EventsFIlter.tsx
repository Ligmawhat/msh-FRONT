import React, { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { FilterActions } from "../../models/redux"
import { getFilters } from "../../redux/actions/filterActions"
import "./EventsFilter.scss"

const filterUrl =
  "https://cdn0.iconfinder.com/data/icons/glyphpack/36/filter-512.png"

const EventsFilter: FC = () => {
  const filters = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFilters())
  }, [])

  console.log(filters)

  return (
    <>
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
    </>
  )
}

export default EventsFilter
