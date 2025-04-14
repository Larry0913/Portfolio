import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lingjie (Larry) Li </span>
            from <span className="purple"> Vancouver, Canada.</span>
            <br />
            I'm currently pursuing my Master Degree in Computer Science at <span className="purple">Simon Fraser University</span>.
            <br />
            My interests lie in building modern web technologies, AI systems, and cloud-powered applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> 🏋️ Working out / Fitness training
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Travelling and exploring new places
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
