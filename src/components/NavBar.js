import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import pradumImg from "../assets/img/pradumImg.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import whatsappIcon from "../assets/img/whatsappIcon.svg";
import emailIcon from "../assets/img/emailIcon.svg";


function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };


  const whatsappNumber = "9112526710"; 
  const whatsappMessage = "Hello, I'm reaching out regarding potential opportunities."; 
  const mailtoLink = "mailto:pradumsonkar9112@gmail.com?subject=Inquiry&body=Hello, I'm reaching out regarding potential opportunities."; // Corrected mailto link


  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={pradumImg} alt="pradumImg" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/pradum-sonkar/"
                  target="_blank"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/pradum9112/" target="_blank">
                  <img src={navIcon2} alt="" />
                </a>
                <a
                  href="https://instagram.com/pradum_sonkar_00?/"
                  target="_blank"
                >
                  <img src={navIcon3} alt="" />
                </a>
                 {/* WhatsApp Link */}
          <a
            href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me on WhatsApp"
          >
           <img src={whatsappIcon} alt="whatsapp" />
          </a>

          {/* Email Link */}
          {/* <a
            href={mailtoLink} // Corrected email link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email me"
          >
            <img src={emailIcon} alt="email" />
          </a> */}
              </div>
              <HashLink to="#connect">
                <button className="vvd" onClick={() => console.log("connect")}>
                  <span>Lets's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavBar;
