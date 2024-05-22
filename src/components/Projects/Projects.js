import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import english from "../../Assets/Projects/english.png";
import wanderlust from "../../Assets/Projects/wanderlust.png";
import weather from "../../Assets/Projects/weather.png";

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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
