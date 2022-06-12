import * as React from "react"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

const user = {
  type: "boss",
  userName: "bombass",
  userId: 1,
  location: "chechnya",
  userSkills: ["swim, fly, skate"],
  companyAdress: "pushkinskaya",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
}

export default function UserCard() {
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        sx={{ borderRadius: 50 }}
        component="img"
        height="250"
        width="200"
        image={user.logo}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.type === "boss" && `ID организации: ${user.userId}`}
          {user.type === "volunteer" && `ID волонтера: ${user.userId}`}
          {user.type === "admin" && `ID волонтера/организации: ${user.userId}`}
        </Typography>
        <Typography variant="h5" component="div">
          {user.type === "boss" && `Название организации: ${user.userName}`}
          {user.type === "volunteer" && `Имя: ${user.userName}`}
          {user.type === "admin" &&
            `Имя волонтера/Название организации: ${user.userId}`}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <LocationOnIcon />
          {user.location}
        </Typography>
        {user.type === "volunteer" &&
          `My skills:
        ${
          user?.userSkills &&
          user.userSkills.map((el, index) => (
            <div key={index}>
              <Typography variant="body2">{el}</Typography>
            </div>
          ))
        }`}
      </CardContent>
      <CardActions>
        <Button size="small">Искать мероприятия</Button>
      </CardActions>
    </Card>
  )
}
