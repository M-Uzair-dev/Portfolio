import React, { useState } from "react";
import "../css/projects.css";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  let [open, setOpen] = useState(0);

  return (
    <div className="projectsPage">
      <h1>My Projects</h1>
      <div className="mainGridDiv">
        <div
          className="gridDiv1 gridDiv"
          onClick={() => navigate("/project/messegit")}
        >
          <div className="innerdiv1 innerdiv">
            <div className="projectCardText">
              <h1>Messegit</h1>
              <p className="click">Click to read more...</p>
            </div>
          </div>
        </div>
        <div
          className="gridDiv2 gridDiv"
          onClick={() => navigate("/project/textguard")}
        >
          <div className="innerdiv">
            <div className="projectCardText">
              <h1>PropertySeekers</h1>
              <p className="click">Click to read more...</p>
            </div>
          </div>
        </div>
        <div
          className="gridDiv3 gridDiv"
          onClick={() => navigate("/project/cinemorphia")}
        >
          <div className="innerdiv">
            <div className="projectCardText">
              <h1>Cinemorphia</h1>
              <p className="click">Click to read more...</p>
            </div>
          </div>
        </div>
        <div
          className="gridDiv4 gridDiv"
          onClick={() => navigate("/project/propertyseekers")}
        >
          <div className="innerdiv">
            <div className="projectCardText">
              <h1>TextGuard</h1>
              <p className="click">Click to read more...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
