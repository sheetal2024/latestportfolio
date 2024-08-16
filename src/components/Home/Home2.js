import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              Hi there! I'm a final year B.Tech student in Electronics and
              Telecommunication Engineering, currently in my 7th semester. I
              have a knack for <span className="purple">MERN stack</span>{" "}
              development and love{" "}
              <span className="purple">solving problems</span> .
              <br />
              <br />
              My projects have helped me sharpen my skills, making me confident
              in tackling complex challenges.
              <br />
              <br />I also believe in the power of{" "}
              <span className="purple">good communication</span> . Whether it's
              working with a team or presenting ideas, I strive to be clear and
              effective in my interactions.
              <br />
              <br />
              Thanks for stopping by my portfolio. Let's connect and create
              something amazing together!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sheetal2024"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sheetal-sharma-815267257"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
  
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
