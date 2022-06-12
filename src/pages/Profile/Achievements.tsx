import * as React from "react"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

function Achievements() {
  const achiev = [{}, {}]

  const badges = [
    {
      title: "winner",
      pic: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      acquired: Date.now(),
      project: "fuc",
    },
    {
      title: "helper",
      pic: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      acquired: Date.now(),
      project: "lol",
    },
    {
      title: "loser",
      pic: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      acquired: Date.now(),
      project: "lal",
    },
    {
      title: "alesha",
      pic: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      acquired: Date.now(),
      project: "kek",
    },
  ]

  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          test
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ borderRadius: 50 }}
        component="img"
        height="250"
        width="250"
        image={badges[0].pic}
      />
    </Card>
  )
}

export default Achievements
