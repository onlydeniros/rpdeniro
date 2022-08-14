import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import ReplyIcon from '@material-ui/icons/Reply';
import "../components/ProjectDisplayStyles.css";

function ProjectDisplay() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <a href={project.view} rel="noopener noreferrer" target="_blank">
        <img className="img-hover" src={project.image} alt="projects cover" />
      </a>
      <h2>{project.skills}</h2>
      <p>{project.info}</p>
      <div className="replyIcon" onClick={() => {navigate("/project/")}}>
      <a href={project.github} rel="noopener noreferrer" target="_blank">
        <GitHubIcon />
      </a>
        <ReplyIcon />
       <span>Back to Projects</span>
      </div>
    </div>
  );
}

export default ProjectDisplay;
