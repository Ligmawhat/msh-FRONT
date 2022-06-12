import * as React from "react"
import { useEffect, useState } from "react"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { tempLocations } from "../../mocks/events"
import { location } from "../../models/event"
import { filterType, oneFilter } from "../../models/redux"
import { ACTION_setFilters } from "../../redux/actions/filterActions"

export default function LocationFilter() {
  const dispatch = useAppDispatch()
  const filters: oneFilter[] = useAppSelector((state) => {
    return state.filters
  })
  const options = tempLocations.map((option) => {
    const categoriesTitle = option.place.toUpperCase()
    return {
      categoriesTitle,
      ...option,
    }
  })
  const [selectedLocation, setSelectedLocation] = useState<
    location | undefined
  >(undefined)
  const [inputLocation, setInputLocation] = useState<string>("")
  useEffect(() => {
    const newFilters = filters.map((oneFilter) => {
      return oneFilter.type === filterType.search
        ? { ...oneFilter, value: inputLocation }
        : oneFilter
    })
    dispatch(ACTION_setFilters(newFilters as oneFilter[]))
  }, [inputLocation])

  const handleChange = (place: string) => {
    setInputLocation(place)
    const pickLocation = tempLocations.find((loc) => loc.place === place)
    setSelectedLocation(pickLocation)
  }

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        // eslint-disable-next-line prettier/prettier
        (a, b) => -b.categoriesTitle.localeCompare(a.categoriesTitle),
      )}
      getOptionLabel={(option) => option.place}
      sx={{ width: 300 }}
      renderInput={(params) => {
        handleChange(`${params.inputProps.value}`)
        return <TextField {...params} label="With categories" />
      }}
    />
  )
}
