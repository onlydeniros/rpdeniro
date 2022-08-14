import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <div className="projectList">
      {ProjectList.map((project,idx)=>{
        return <ProjectItem id={idx} name={project.name} image={project.image} />
      })}
      </div>
      <Footer />
    </div>
  );
};

export default Project;
