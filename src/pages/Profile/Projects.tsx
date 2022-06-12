import React from "react"

function Projects() {
  const projectsMock = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      title: "first",
      desc: "descsesc",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      title: "first",
      desc: "descsesc",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      title: "first",
      desc: "descsesc",
    },
  ]

  return (
    <div>
      {projectsMock.map((project) => (
        <>
          <div className="logo">
            <img src={project.img} width="100" height="100" />{" "}
          </div>
          <div>
            {" "}
            <p> {project.title}</p>{" "}
          </div>
          <div>
            {" "}
            <p> {project.desc}</p>{" "}
          </div>
        </>
      ))}
    </div>
  )
}

export default Projects
