import React from "react";
import Experience from "./Experience";
import { Link } from "react-router-dom";
import Deniro1 from "../assets/images/Deniro1.jpeg";
import "./AboutContentStyles.css";

const AboutContent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>
            Entrepreneur & Engineer. Rebelliously creative with a passion to
            create robust projects, design elegant applications, and truly
            anything to push my software abilities to the next level.
          </p>
          
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>

        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={Deniro1} className="propic" alt="profile"></img>
            </div>
          </div>
        </div>
        <div className="about">
          <Experience />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
