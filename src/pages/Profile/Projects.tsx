import React from "react"
import { projectsMock } from "../../mocks/userProfile"

function Projects() {
  return (
    <div style={{ display: "flex" }}>
      {projectsMock.map((project) => (
        <div key={project.id} style={{ display: "flex" }}>
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
        </div>
      ))}
    </div>
  )
}

export default Projects
