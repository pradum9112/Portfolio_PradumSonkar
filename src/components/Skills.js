import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Software Developer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Communication Skills</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>DSA</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Full Stack Developer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>MERN Stack Developer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Backend Developer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Frontend Developer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Google Cloud Plateform(GCP)</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
}

export default Skills;
