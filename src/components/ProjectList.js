import React from "react";
import About from "./About";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(({name,about,technologies},index)=>
          <ProjectItem  name={name} about={about} technologies={technologies} key={index}/>
        )}
      </div>
    </div>
  );
}

export default ProjectList;
