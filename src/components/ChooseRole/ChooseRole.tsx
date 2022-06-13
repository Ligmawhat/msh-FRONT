import * as React from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { ACTION_setRole } from "../../redux/actions/roleActions"
import Button from "../common/Button/Button"

export default function ChooseRole() {
  const [value, setValue] = React.useState(0)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const navigationHandler = () => {
    navigate("/register")
  }
  React.useEffect(() => {
    dispatch(ACTION_setRole(value === 0 ? "VOLUNTEER" : "ORGANIZER"))
  }, [value])

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Волонтер" />
          <Tab label="Организатор" />
        </Tabs>
      </Box>
      <Button text="Зарегистрироваться" onClick={navigationHandler} />
    </>
  )
}
