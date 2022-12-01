import pro1 from "../assets/images/Sweet Nostalgia.png";
import pro2 from "../assets/images/Weather-Dashboard -ss.png";
import pro3 from "../assets/images/EcommerceBackendPic.png";
import pro4 from "../assets/images/DeVise.png";
import pro5 from "../assets/images/coverletterss.png";
import pro6 from "../assets/images/resume.png";
import pro7 from "../assets/images/interviewprep.png";
import pro8 from "../assets/images/instructions.png";
import pro9 from "../assets/images/proposalss.png";

export const ProjectList = [
  {
    name: "Sweet Nostalgia",
    image: pro1,
    github: "https://github.com/Brainybrian316/Sweet-Nostalgia",
    view: "https://sweet-nostalgia.herokuapp.com/",
    info: "Created a full-stack web application with a group of developers using a database to store user's information when subscribing to our website used Sequelize & MYSQL to create  the associations within the database and dynamically update each webpage with the use of Handlebars and Express.js to create routes based off the user's response.",
    skills: "Skills: JavaScript, Sequelize & SQL, Handlebars, Express.js ",
  },
  {
    name: "Weather Dashboard",
    image: pro2,
    github: "https://github.com/onlydeniros/Weather-Dashboard",
    view: "https://onlydeniros.github.io/Weather-Dashboard/",
    info: "Engineered a user interface for travelers to request any city in the U.S to retrieve the latest forecast with current temperatures, humidity, wind speed, and UV index. Retrieved data from a Web API, parsed using JavaScript template literals to populate and update the webpage per request. Featured technologies used in this project consisted of Bootstrap, jQuery & Moment.js",
    skills: "Skills: Javascript, Bootstrap, jQuery, Web API",
  },
  {
    name: "Ecommerce Backend",
    image: pro3,
    github: "https://github.com/onlydeniros/e-commerce_backend",
    view: "https://drive.google.com/file/d/1ywmUslBs8mo84UCGkH5r0CXjGAf8RFpn/view",
    info: "This app is the backend portion of an E-commerce website. Express.js was used for the routes and MySQL for the database along with using ORM Sequelize to operate SQL models and queries. The SQL database includes tables for products, categories, tags, and updates from the database which are joined through Sequelize queries allowing the ability to 'CRUD' the database. This allow the webiste to keep track of users who purchase a product on the website & respond correctly to users interactions on the website such removing an item from the shopping cart and etc.. ",
    skills: "Skills: Sequelize, SQL, Express.js",
  },
  {
    name: "Devise MERN Stack",
    image: pro4,
    github: "https://github.com/Brainybrian316/DEVise",
    view: "https://devise-collaboration-platform.herokuapp.com/",
    info: "Devise is a simple, open-source, web-based application for collaboration, creating, and connecting with people. The goal is to create a platform for people to connect with each other and work on projects together. The application also features an idea bin where users can find ideas and templates to help them create their own projects. User can post project built from templates or ideas they have created themselves for others to use or reference. Finally, users are able to connect with other users who are looking to build a project or receive help with a project they are currently working on. This app is a full-stack application that uses MERN stack. The application is built on the Express.js framework and uses the MongoDB database. Finally, the application is deployed on Heroku. We are currently working on a new version of the application that will be realeased in the future.",
    skills: "Skills: React, MonogDB, Node.js, Express.js, MUI",
  },
  {
    name: "Cover Letter",
    image: pro5,
    view: "https://docs.google.com/document/d/1oAmrzOdAR8p3A5hVFud2Cp_kORs6Ob4x/edit?usp=sharing&ouid=106128385963472784841&rtpof=true&sd=true",
  },
  {
    name: "Resume",
    image: pro6,
    view: "https://docs.google.com/document/d/1ld2VYvr2ja0mypnHijR2dix_WQBJgMo9/edit?usp=sharing&ouid=106128385963472784841&rtpof=true&sd=true",
  },
  {
    name: "Interview Prep",
    image: pro7,
    view: "https://www.youtube.com/watch?v=puR1vhzHp5E",
  },
  {
    name: "Instruction Paper",
    image: pro8,
    view: "https://docs.google.com/document/d/1hvPG1wyYxOIGRCTkG8C_uAdPQbDv9zcR/edit?usp=sharing&ouid=106128385963472784841&rtpof=true&sd=true",
    info: "For this assignment I created a Visual Studio Code keybinding shortcut manual for Window users. This manual will help programmers and developers increase productivity and work flow, as well go in depth about the most common keybinding commands such as file management, basic editing files, search and replacing code, and creating your own keybinding shortcuts.",
  },
  {
    name: "Proposal Paper",
    image: pro9,
    view: "https://docs.google.com/document/d/1wQyjk-9Hqael_xZ3hAxe1HyZ2Irv9tZN/edit?usp=sharing&ouid=106128385963472784841&rtpof=true&sd=true",
    info: "For this assignment I created a proposal paper about enhancing communcation with people across the globe. Adressing the advantages and disadvantages of the internet and how the internet affects people's social, academic, and professional life.",
  },
];
