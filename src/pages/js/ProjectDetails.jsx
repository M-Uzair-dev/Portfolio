import React from "react";
import "../css/projectdetails.css";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id: projectName } = useParams();
  console.log(projectName);
  return <div className="projectDetails">ProjectDetails of {projectName}</div>;
};

export default ProjectDetails;
