import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          PROFESSIONAL <strong className="purple">SKILLSET </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">TOOLS</strong> I USE
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
