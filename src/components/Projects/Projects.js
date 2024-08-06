import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import snakegame from "../../Assets/Projects/snakegame.jpeg";
import nyra from "../../Assets/Projects/nyra.jpeg";
import quiz from "../../Assets/Projects/quiz.jpeg";
import gesturepilot from "../../Assets/Projects/gesturepilot.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MY <strong className="purple">WORKS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakegame}
              title="Snake Game"
              description=""
              demoLink="https://snakegamexyz.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyra}
              isBlog={false}
              title="AI Chat Application"
              description=""
              demoLink="https://nyra.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz Application"
              description=""
              demoLink="https://mindsprint.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gesturepilot}
              isBlog={false}
              title="Gesture Pilot"
              description=""
              demoLink="https://gesturepilot.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
