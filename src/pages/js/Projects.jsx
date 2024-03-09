import React, { useState } from "react";
import "../css/projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  let [open, setOpen] = useState(0);
  const variants = {
    closed: {
      position: "static",
    },
    open: {
      position: "absolute",
    },
  };
  return (
    <div className="projectsPage">
      <h1>My Projects</h1>
      <div className="mainGridDiv">
        <motion.div className="gridDiv1 gridDiv">
          <motion.div
            className="innerdiv1 innerdiv"
            variants={variants}
            animate={open === 1 ? "open" : "closed"}
            onClick={() => (open === 1 ? setOpen(0) : setOpen(1))}
            transition={{ duration: 1, type: "tween" }}
          >
            <p>Project 1 image</p>
          </motion.div>
        </motion.div>
        <div className="gridDiv2 gridDiv">
          <div className="innerdiv">
            <p>Project 2 image</p>{" "}
          </div>
        </div>
        <div className="gridDiv3 gridDiv">
          <div className="innerdiv">
            <p>Project 3 image</p>{" "}
          </div>
        </div>
        <div className="gridDiv4 gridDiv">
          <div className="innerdiv">
            <p>Project 4 image</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
