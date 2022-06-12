import * as React from "react"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import GradeIcon from "@mui/icons-material/Grade"
import SupportIcon from "@mui/icons-material/Support"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Achievements from "./Achievements/Achievements"
import Projects from "./Projects"
import UserCard from "./UserCard"

export default function ProfileRoutes() {
  const [value, setValue] = React.useState("1")

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%", height: "89.5vh", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Мой профиль" value="1" icon={<AccountCircleIcon />} />
            <Tab label="Мои проекты" value="2" icon={<SupportIcon />} />
            <Tab label="Мои достижения" value="3" icon={<GradeIcon />} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <UserCard />
        </TabPanel>
        <TabPanel value="2">
          <Projects />
        </TabPanel>
        <TabPanel value="3">
          <Achievements />
        </TabPanel>
      </TabContext>
    </Box>
  )
}
