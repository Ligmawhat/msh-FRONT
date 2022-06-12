import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

function Achievements() {
  const feedback = [
    {
      companyName: "ricy",
      companyPic:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      comment: "text",
    },
    {
      companyName: "licy",
      companyPic:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      comment: "second",
    },
    {
      companyName: "enoti",
      companyPic:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      comment: "third",
    },
  ]

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
    <>
      <div className="feedback-wrapper">
        {feedback.map((el, index) => (
          <Card key={index}>
            <CardMedia
              sx={{ borderRadius: 50, height: 50, width: 50 }}
              component="img"
              image={el.companyPic}
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {el.companyName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {el.comment}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="achievements-wrapper">
        {badges.map((el, index) => (
          <Card key={index} sx={{ width: 300 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                test
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ borderRadius: 50 }}
              component="img"
              height="250"
              width="250"
              image={el.pic}
            />
          </Card>
        ))}
      </div>
    </>
  )
}

export default Achievements
