import React from 'react'
import Navbar from "../components/Navbar"
import HeroImg from "../components/HeroImg"
import Footer from "../components/Footer"
import MemberCard from '../components/MemberCard'
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      
      <div className="projectList">
      {ProjectList.map((project,idx)=>{
        return <ProjectItem id={idx} name={project.name} image={project.image} />
      })}
      </div>
      <MemberCard/>
      <Footer/>
    </div>
  )
}

export default Home