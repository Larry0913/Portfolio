import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/larry.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, C, C++ and Javascript. </b>
              </i>
              <br />
              <br />
              Currently, I'm pursuing my <b className="purple">Master of Professional Computer Science degree in Big Data </b> at  &nbsp;
              <i>
                <b className="purple">Simon Fraser University </b> , one of Canada's top research-intensive institutions. I previously completed my Bachelor of Science in {" "}
                <b className="purple">
                Computing Science
                </b> at SFU as well, where I built a solid foundation in systems programming, algorithms, and large-scale data systems.
              </i>
              <br />
              <br />
              My interests lie in developing modern Web Technologies and  <b className="purple">ystem-Level Applications—especially in the realms of cloud infrastructure, embedded systems (application layer), and data-driven solutions. </b>
              I enjoy working close to the system, whether it's designing communication protocols, building real-time monitoring services, or optimizing embedded software in C.
              <br />
              <br />
              I've built full-stack platforms like MarketBay using React.js, Express, and AWS, and I've also worked on <b className="purple">real-time</b> V2X communication systems during my internship at iSmartWays, where I developed C-based data packet structures and a ASN1c UPER encoder/decoder tool to improve the message exchange between MEC and RSU devices.
              <br />
              <br />
              Whenever possible, I combine my academic learning with hands-on development—leveraging tools like Docker, MongoDB, and frameworks like Next.js, while also diving deep into 
              <b className="purple"> low-level programming</b> to build robust, scalable, and impactful systems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{
                  borderRadius: "50%",
                  width: "400px",
                  height: "400px",
                  objectFit: "cover"
                }}
              />
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
                  href="https://github.com/Larry0913"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/LingjieLi5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lingjie-li-760206281/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/larrrrrry0913"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:lilingjie0913@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
            <div style={{ 
              marginTop: "30px", 
              textAlign: "center",
              padding: "20px",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "10px",
              backdropFilter: "blur(10px)"
            }}>
              <h3 style={{ 
                fontSize: "1.5em", 
                marginBottom: "15px"
              }}>
                Contact Me At
              </h3>
              <a
                href="mailto:lilingjie0913@gmail.com"
                style={{
                  color: "#c084f5",
                  fontSize: "1.3em",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px"
                }}
              >
                <AiOutlineMail style={{ fontSize: "1.5em" }} />
                lilingjie0913@gmail.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
