import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Subhrajit Swain </span>
            from <span className="purple"> Bhubaneswar, Odisha, India.</span>
            <br />
            I have completed Master in Computer Application  at CUTM Bhubaneswar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Endeavor to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Subhrajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
