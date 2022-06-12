import React, { FC, useEffect, useState } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { oneFilter } from "../../models/redux"
import { getFilters } from "../../redux/actions/filterActions"
import "./EventsFilter.scss"

interface panel {
  id: number
  opened: boolean
}

const filterUrl =
  "https://cdn0.iconfinder.com/data/icons/glyphpack/36/filter-512.png"

const EventsFilter: FC = () => {
  const filters: oneFilter[] = useAppSelector((state) => {
    console.log("STATE >>>>>", state)
    return state.filters
  })
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getFilters())
  }, [])

  const [expanded, setExpanded] = useState<panel[]>(
    filters.map((filter, index) => ({ id: index, opened: false })),
  )

  const handleChange =
    (panelNumber: number) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded((state) =>
        state.map((panel) => {
          return panel.id === panelNumber
            ? { ...panel, opened: !panel.opened }
            : panel
        }),
      )
    }

  console.log("FILTERS", filters)

  return (
    <>
      {filters.map((filter, index) => {
        return (
          <div key={index} className="filters__item">
            <Accordion
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
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
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
