import React, { useEffect, useState } from "react"
import { InputLabel } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { filterType, oneFilter, urgencyType } from "../../models/redux"
import { ACTION_setFilters } from "../../redux/actions/filterActions"

export default function SelectFilter() {
  const dispatch = useAppDispatch()
  const filters: oneFilter[] = useAppSelector((state) => {
    return state.filters
  })
  const [select, setSelect] = useState<string>("Не выбрано")
  useEffect(() => {
    if (select !== "Не выбрано") {
      const newFilters = filters.map((oneFilter) => {
        return oneFilter.type === filterType.select
          ? { ...oneFilter, value: select }
          : oneFilter
      })
      dispatch(ACTION_setFilters(newFilters as oneFilter[]))
    } else if (select === "Не выбрано") {
      const newFilters = filters.map((oneFilter) => {
        return oneFilter.type === filterType.select
          ? { ...oneFilter, value: null }
          : oneFilter
      })
      dispatch(ACTION_setFilters(newFilters as oneFilter[]))
    }
  }, [select])

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value)
  }

  const urgencyItems = [
    {
      title: "Не выбрано",
      value: "Не выбрано",
    },
    {
      title: "Срочно",
      value: urgencyType.urgent,
    },
    {
      title: "В течение недели",
      value: urgencyType.week,
    },
    {
      title: "В течение месяца",
      value: urgencyType.month,
    },
  ]

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Срочность</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          onChange={handleChange}
          label="Срочность"
          sx={{ width: 200 }}
        >
          {urgencyItems.map((item, index) => {
            return (
              <MenuItem key={index} value={item.value}>
                {item.title}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
