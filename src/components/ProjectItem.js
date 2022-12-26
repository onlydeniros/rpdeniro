import React from "react";
import "../components/ProjectItemStyles.css";
import { useNavigate } from "react-router-dom";



const ProjectItem = ({ image, name, id }) => {
  const navigate = useNavigate();
  return (
    <div className="projectItem" onClick={() => {navigate("/project/" + id )}}>
      <img className="bgImage" src={image} alt="project one" />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
