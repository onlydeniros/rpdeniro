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
          <h1>Digital Portfolio Progress</h1>
          <p>
            Far as the progress of my digital portfolio, there still some
            improvements i can make to this website, such as updating my
            experince section and adding more projects that i built with
            different programming languages, as well add more information about
            my services. I'm satisfied with the desgin of the website, I added
            my perosonal touch to captivate the type of person I am. I also
            believe fonts are easy to read and match the theme of the website. I
            learned alot about React in the process of making this website,
            React "SPA" improves the webiste speed tremendously which is crucial
            for any webiste success. The only thing i find confusing is the
            process of deploying a React application to the World Wide Web. I
            know theres alot that goes into FTP and that whole process is new to
            me so eventaully in my journey as an software engineer i will cross
            that bridge and burn it once i find my answers.
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
