import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Shopify Specialist | CMS | Three.js Developer
              <br />
              <br />I am fluent in specialized fields such as
              <i>
                <b className="purple"> Shopify, CMS, Three.js Development. </b>
              </i>
              <br />
              <br />
              I enjoy combining &nbsp;
              <i>
                <b className="purple">Shopify and Three.js technologies &nbsp;</b>
              </i>
              to create more attractive and vibrant Websites and Stores, and I have the skills to strengthen effective advertising and sales strategies for products.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Vue.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={"https://www.internetsearchinc.com/wp-content/uploads/2022/03/Shopify-development-services.jpg"} className="img-fluid rounded-3 opacity-75" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
