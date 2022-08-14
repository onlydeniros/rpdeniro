import "./WorkCardStyles.css";
import pro1 from "../assets/images/Sweet Nostalgia.png";
import pro2 from "../assets/images/Weather-Dashboard -ss.png";
import pro3 from "../assets/images/EcommerceBackendPic.png";
import pro4 from "../assets/images/DeVise.png";
import React from "react";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">PROJECTS</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="project one" />
          <h2 className="project-title">Sweet Nostalgia</h2>
          <div className="pro-details">
            <p>
              Created a full-stack web application with a group of developers
              using a database to store user’s information when subscribing to
              our website used Sequelize & MYSQL to create the associations
              within the database and dynamically update each webpage with the
              use of Handlebars and Express.js to create routes based off the
              user’s response.
            </p>
            <div className="pro-btns">
              <a
                href={"https://sweet-nostalgia.herokuapp.com/"}
                className="btn"
                rel="noopener noreferrer"
                target="_blank"
              >
                View
              </a>
              <a
                href={"https://github.com/Brainybrian316/Sweet-Nostalgia"}
                className="btn"
                rel="noopener noreferrer"
                target="_blank"
              >
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro2} alt="project two" />
          <h2 className="project-title">Weather Dashboard</h2>
          <div className="pro-details">
            <p>
              Engineered a user interface for travelers to request any city in
              the U.S to retrieve the latest forecast with current temperatures,
              humidity, wind speed, and UV index. Retrieved data from a Web API,
              parsed using JavaScript template literals to populate and update
              the webpage per request. Featured technologies used in this
              project consisted of Bootstrap, jQuery & Moment.js
            </p>
            <div className="pro-btns">
              <a
                href={"https://onlydeniros.github.io/Weather-Dashboard/"}
                className="btn"
                rel="noopener noreferrer"
                target="_blank"
              >
                View
              </a>
              <a
                href={"https://github.com/onlydeniros/Weather-Dashboard"}
                className="btn"
                rel="noopener noreferrer"
                target="_blank"
              >
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro3} alt="project three" />
          <h2 className="project-title">Ecommerce Backend</h2>
          <div className="pro-details">
            <p>
              This app is the backend portion of an E-Commerce website.
              Express.js was used for the server and MySQL for the database
              along with Sequelize as the ORM to run SQL models and queries. The
              SQL database includes tables for products, categories, tags, and
              product tags. RESTful API routes are used to make requests and
              updates from the database which are joined through Sequelize
              queries allowing the ability to "CRUD" the database.
            </p>
            <div className="pro-btns">
              <a
                href={
                  "https://drive.google.com/file/d/1ywmUslBs8mo84UCGkH5r0CXjGAf8RFpn/view"
                }
                className="btn"
                rel="noopener noreferrer"
                target="_blank"
              >
                View
              </a>
              <a
                href={"https://github.com/onlydeniros/e-commerce_backend"}
                className="btn"
                rel="noopener noreferrer"
                target="_blank"
              >
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro4} alt="project four" />
          <h2 className="project-title">DEVISE MERN STACK</h2>
          <div className="pro-details">
            <p>
              Devise is a simple, open-source, web-based application for
              collaboration, creating, and connecting with people. The goal is
              to create a platform for people to connect with each other and
              work on projects together. The application also features an idea
              bin where users can find ideas and templates to help them create
              their own projects. User can post project built from templates or
              ideas they have created themselves for others to use or reference.
              Finally, users are able to connect with other users who are
              looking to build a project or receive help with a project they are
              currently working on. This app is a full-stack application that
              uses MERN stack. The application is built on the Express.js
              framework and uses the MongoDB database. We use graphQL to query
              and mutate data in the database. Finally, the application is
              deployed on Heroku. This is a big project and still a work in
              progress. We are currently working on a new version of the
              application that will be released in the future. For now this is
              the version 1.0.0 of the application and our MVP.
            </p>
            <div className="pro-btns">
              <a
                href={
                  "https://devise-collaboration-platform.herokuapp.com/"
                }
                className="btn"
                rel="noopener noreferrer"
                target="_blank"
              >
                View
              </a>
              <a
                href={"https://github.com/Brainybrian316/DEVise"}
                className="btn"
                rel="noopener noreferrer"
                target="_blank"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
