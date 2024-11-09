import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import english from "../../Assets/Projects/english.png";
import wanderlust from "../../Assets/Projects/wanderlust.png";
import weather from "../../Assets/Projects/weather.png";
import Learntube from "../../Assets/Learntube.png"
import Zerodha from "../../Assets/Zerodha.png"
import faceconnect from "../../Assets/faceConnectica.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlust}
              isBlog={false}
              title="Wanderlust"
              description="This project is an attempt to create a simplified version of the Airbnb website using Node.js, Express, MongoDB, EJS, and CSS. Features User Authentication: Allow users to sign up, log in, and log out. Property Listings: Display a list of properties, including details, map and images. User : Enable users to create, edit, delete listings and create, delete reviews properties."
              ghLink="https://github.com/Subhrajit-14/WanderLust"
              demoLink="https://wanderlust-project-4pj6.onrender.com/listings"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast Using React.js"
              description="Weather App This is a simple weather app built with React, Vite, and MUI (Material-UI).Technologies used : REACT VITE MATERIAL-UI HTML JAVASCRIPT CSS."
              ghLink="https://github.com/Subhrajit-14/React-Weather-Forecast"
              demoLink="http://localhost:5173"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={english}
              isBlog={false}
              title="English-Dictionary"
              description="I developed this English Dictionary using Html,Css, Js.Search the word and Press Enter."
              ghLink="https://github.com/Subhrajit-14/English-Dictionary"
              demoLink="http://127.0.0.1:5500/English_Dictionary-master/English-Dictionary/index.html"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceconnect}
              isBlog={false}
              title="Face-Connectica_Video_Meeting"
              description="Welcome to the Face Connectica project! This application is a real-time video conferencing app built using React and Socket.io. Dive into the world of seamless video communication and collaboration!"
              ghLink="https://github.com/Subhrajit-14/Face-Connectica_Video_Meeting"
              demoLink="https://face-connectica-video-meeting.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zerodha}
              isBlog={false}
              title="Zerodha-Clone"
              description="This project is a React-based web application for Zerodha, a comprehensive trading platform offering real-time stock market data, intuitive navigation, and advanced trading features."
              ghLink="https://github.com/Subhrajit-14/Zerodha-Clone"
              demoLink="https://zerodha-clone-frontend-vqjq.onrender.com/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learntube}
              isBlog={false}
              title="LearnTube-Learning-Platform"
              description="I developed a feature-rich mern-stack web application inspired by Learntube. The project is built using MongoDB, Express.js, and Node.js.."
              ghLink="https://github.com/Subhrajit-14/LearnTube-Learning-Platform"
              demoLink=" https://learntube-learning-platform.onrender.com"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
