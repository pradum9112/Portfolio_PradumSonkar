import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
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
    <section className="skill" id="skills" style={styles.skillSection}>
      {/* Black Theme Modern Styling & Strict Centering Override */}
      <style>{`
        .skill-bx {
          background: #080810;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          padding: 60px 40px;
          text-align: center !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9);
          position: relative;
          z-index: 2;
          overflow: hidden;
        }

        .skill-heading {
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #ff007f, #00dfd8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 12px;
          text-align: center !important;
        }

        .skill-description {
          color: #a1a1aa;
          font-size: 1.05rem;
          max-width: 650px;
          margin: 0 auto 40px auto !important;
          line-height: 1.6;
          text-align: center !important;
          display: block !important;
        }

        .skill-slider .item {
          padding: 20px 10px;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .skill-slider .item:hover {
          transform: translateY(-8px);
        }

        .skill-slider .item img {
          width: 140px;
          height: 140px;
          margin: 0 auto 20px auto;
          filter: drop-shadow(0 0 12px rgba(0, 223, 216, 0.3));
          transition: filter 0.3s ease;
        }

        .skill-slider .item:hover img {
          filter: drop-shadow(0 0 20px rgba(255, 0, 127, 0.6));
        }

        .skill-slider .item h5 {
          color: #ffffff;
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-top: 10px;
        }

        /* Carousel Controls */
        .react-multiple-carousel__arrow {
          background: rgba(20, 20, 35, 0.85) !important;
          border: 1px solid rgba(255, 255, 255, 0.25) !important;
          backdrop-filter: blur(10px);
          width: 46px !important;
          height: 46px !important;
          border-radius: 50% !important;
          z-index: 10 !important;
        }

        .react-multiple-carousel__arrow::before {
          color: #ffffff !important;
          font-weight: bold !important;
        }

        .react-multiple-carousel__arrow:hover {
          background: linear-gradient(135deg, #ff007f, #00dfd8) !important;
          border-color: transparent !important;
          box-shadow: 0 0 18px rgba(0, 223, 216, 0.5) !important;
        }
      `}</style>

      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 className="skill-heading">Skills</h2>
              <p 
                className="skill-description" 
                style={{ 
                  textAlign: "center", 
                  display: "block", 
                  marginLeft: "auto", 
                  marginRight: "auto" 
                }}
              >
                A strong foundation in full-stack web architecture, backend development, DSA, and modern cloud technologies.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
              >
                <div className="item">
                  <img src={meter1} alt="Software Developer" />
                  <h5>Software Developer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Full Stack Developer" />
                  <h5>Full Stack Developer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="MERN Stack Developer" />
                  <h5>MERN Stack Developer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="DSA" />
                  <h5>DSA</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Backend Developer" />
                  <h5>Backend Developer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Frontend Developer" />
                  <h5>Frontend Developer</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Google Cloud Platform" />
                  <h5>Google Cloud Platform (GCP)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Communication Skills" />
                  <h5>Communication Skills</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} alt="Background" style={styles.bgImage} />
    </section>
  );
}

const styles = {
  skillSection: {
    padding: "80px 0",
    backgroundColor: "#000000",
    position: "relative",
  },
  bgImage: {
    top: "28%",
    position: "absolute",
    bottom: "0",
    width: "40%",
    zIndex: 1,
    opacity: 0.4,
  },
};

export default Skills;