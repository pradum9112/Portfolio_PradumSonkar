import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import pradumImg from "../assets/img/pradumImg.png";
import Cv from "./Cv/Cv";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Developer", "Backend Developer", "Fullstack Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(80 - Math.random() * 50); // Faster rotation speed
  const period = 800; // Reduced time for faster effect

  // Calculate age dynamically
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };
  const age = calculateAge("2002-06-04");

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <section className="banner" id="home">
      <Container >
        <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi, I'm Pradum Sonkar`}<br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
            Hi!, I'm Pradum Sonkar, a passionate developer with experience in building end-to-end products. I have worked on microservices, Google Cloud Platform (GCP), and secure API development. Through various projects, I have gained strong skills in backend development, security, and cloud integration. I enjoy learning, problem-solving, and collaborating to build efficient and scalable solutions.
            </p>
            <div className="personal-details">
              <div className="row">
                <div className="col">
                  <p><strong>Degree Pursuing:</strong> B-Tech I.T</p>
                  <p><strong>Graduation Year:</strong> 2024</p>
                  <p><strong>Mobile no :</strong> +91 9112526710</p>
                  <p><strong>Email :</strong> pradumsonkar9112@gmail.com</p>

                </div>
                <div className="col">
                  <p><strong>Age:</strong> {age}</p>
                  <p><strong>City:</strong> Mau (U.P)</p>
                  <p><strong>Job / Intern:</strong> Available</p>
                </div>
              </div>
            </div>
            <Cv />
          </Col>
          <Col xs={12} md={6} xl={5} className="portfolio-section">
            <img src={pradumImg} alt="Header Img" style={{ width: '400px', height: '400px',paddingRight:"17px", borderRadius: '50%'}}  className="portfolio-section" />
           
          </Col>
         
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
