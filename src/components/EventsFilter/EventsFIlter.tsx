import React, { FC, useEffect, useState } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { category, filterType, oneFilter } from "../../models/redux"
import {
  ACTION_setFilters,
  getFilters,
} from "../../redux/actions/filterActions"
import "./EventsFilter.scss"
import TransparentButton from "../common/TransparentButton/TransparentButton"
import LocationFilter from "../LocationFilter/LocationFilter"
import SelectFilter from "../SelectFilter/SelectFilter"

interface panel {
  id: number
  opened: boolean
}

const filterUrl =
  "https://cdn0.iconfinder.com/data/icons/glyphpack/36/filter-512.png"

const EventsFilter: FC = () => {
  const filters: oneFilter[] = useAppSelector((state) => {
    return state.filters
  })
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFilters())
  }, [])

  const [expanded, setExpanded] = useState<panel[]>(
    filters.map((filter, index) => ({ id: index, opened: false })),
  )

  const handleChange = (panelNumber: number) => () => {
    setExpanded((state) =>
      state.map((panel) => {
        return panel.id === panelNumber
          ? { ...panel, opened: !panel.opened }
          : panel
      }),
    )
  }

  const handleActiveButton = (changeCategory: category) => {
    const newFilters = filters.map((filter) => {
      if (
        filter.type === filterType.buttons &&
        (filter.value as category[])?.find(
          (el) => el.title === changeCategory.title,
        )
      ) {
        const newValue = (filter.value as category[]).map((oneCategory) => {
          return oneCategory.title === changeCategory.title
            ? { ...oneCategory, active: !changeCategory.active }
            : oneCategory
        })
        return { ...filter, value: newValue }
      }
      return filter
    })
    dispatch(ACTION_setFilters(newFilters as oneFilter[]))
  }

  return (
    <>
      {filters.map((filter, index) => {
        return (
          <div key={index} className="filters__item">
            <Accordion
              className="filters__accordion"
              expanded={Boolean(
                expanded.find((panel) => panel.id === index)?.opened,
              )}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={
                  <img
                    src={filterUrl}
                    alt="filter icon"
                    className="filters__icon"
                  />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <button className="filters__button">{filter.title}</button>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="filters__accordionButtons">
                    {filter.type === filterType.buttons ? (
                      (filter.value as category[])?.map((category, index) => {
                        return (
                          <div
                            key={`${category.title}${index}`}
                            className="filters__accordionButton"
                          >
                            <TransparentButton
                              clicked={category.active}
                              text={category.title}
                              onClick={() => handleActiveButton(category)}
                            />
                          </div>
                        )
                      })
                    ) : filter.type === filterType.search ? (
                      <LocationFilter />
                    ) : filter.type === filterType.select ? (
                      <SelectFilter />
                    ) : (
                      "Фильтр"
                    )}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        )
      })}
      {/* <div className="filters__item">
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
      </div> */}
    </>
  )
}

export default EventsFilter
