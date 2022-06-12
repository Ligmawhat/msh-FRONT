import * as React from "react"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

export default function SearchGrouped() {
  const options = top100Films.map((option) => {
    const categoriesTitle = option.category.toUpperCase()
    return {
      categoriesTitle,
      ...option,
    }
  })

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        // eslint-disable-next-line prettier/prettier
        (a, b) => -b.categoriesTitle.localeCompare(a.categoriesTitle)
      )}
      groupBy={(option) => option.categoriesTitle}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="With categories" />
      )}
    />
  )
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994, category: "alex" },
  { title: "The Godfather", year: 1972, category: "bilex" },
  { title: "The Godfather: Part II", year: 1974, category: "cilex" },
]
