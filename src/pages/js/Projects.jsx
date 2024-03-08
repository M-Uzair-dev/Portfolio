import React from "react";
import "../css/projects.css";

const Projects = () => {
  return (
    <div className="projectsPage">
      <h1>My Projects</h1>
      <div className="mainGridDiv">
        <div className="gridDiv1 gridDiv">
          <p>Project 1 image</p>
        </div>
        <div className="gridDiv2 gridDiv">
          <p>Project 2 image</p>
        </div>
        <div className="gridDiv3 gridDiv">
          <p>Project 3 image</p>
        </div>
        <div className="gridDiv4 gridDiv">
          <p>Project 4 image</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
