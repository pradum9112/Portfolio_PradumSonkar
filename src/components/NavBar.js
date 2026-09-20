import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import pradumImg from "../assets/img/pradumImg.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
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
  const mailtoLink = "mailto:pradumsonkar9112@gmail.com?subject=Inquiry&body=Hello, I'm reaching out regarding potential opportunities.";

  return (
    <Router>
      <Navbar expand="lg" fixed="top" style={scrolled ? styles.navbarScrolled : styles.navbarDefault}>
        {/* CSS Animations & Hover Effects */}
        <style>{`
          .custom_nav_link {
            color: #b8c1ec !important;
            font-weight: 500;
            font-size: 1.05rem;
            margin: 0 12px;
            position: relative;
            transition: color 0.3s ease;
          }
          .custom_nav_link:hover, .custom_nav_link.active {
            color: #ffffff !important;
          }
          .custom_nav_link::after {
            content: '';
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: -4px;
            left: 0;
            background: linear-gradient(90deg, #ff007f, #00dfd8);
            transition: width 0.3s ease;
          }
          .custom_nav_link:hover::after, .custom_nav_link.active::after {
            width: 100%;
          }
          
          /* Let's Connect Button */
          .connect_btn {
            background: linear-gradient(90deg, #ff007f, #7928ca);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 10px 24px;
            font-weight: 600;
            font-size: 0.95rem;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 0, 127, 0.3);
            white-space: nowrap;
            display: inline-block;
            outline: none;
          }
          .connect_btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 223, 216, 0.4);
            background: linear-gradient(90deg, #7928ca, #00dfd8);
          }

          /* Base Social Icon Circle */
          .social-icon-group {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .social-icon-group a {
            width: 42px;
            height: 42px;
            background: rgba(255, 255, 255, 0.1);
            display: inline-flex;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            line-height: 1;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease-in-out;
            text-decoration: none;
          }
          .social-icon-group a img {
            width: 18px;
            height: 18px;
            filter: brightness(0) invert(1);
            transition: all 0.3s ease-in-out;
          }

          /* Brand Specific Hover Colors */
          .social-icon-group a.linkedin:hover {
            background: rgba(10, 102, 194, 0.2);
            border-color: #0a66c2;
            box-shadow: 0 0 15px rgba(10, 102, 194, 0.5);
            transform: translateY(-3px) scale(1.08);
          }
          .social-icon-group a.linkedin:hover img {
            filter: none;
          }

          .social-icon-group a.github:hover {
            background: rgba(255, 255, 255, 0.25);
            border-color: #ffffff;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
            transform: translateY(-3px) scale(1.08);
          }
          .social-icon-group a.github:hover img {
            filter: brightness(0) invert(1);
          }

          .social-icon-group a.whatsapp:hover {
            background: rgba(35, 211, 102, 0.2);
            border-color: #25d366;
            box-shadow: 0 0 15px rgba(37, 211, 102, 0.5);
            transform: translateY(-3px) scale(1.08);
          }
          .social-icon-group a.whatsapp:hover img {
            filter: none;
          }

          .social-icon-group a.email:hover {
            background: rgba(234, 67, 53, 0.2);
            border-color: #ea4335;
            box-shadow: 0 0 15px rgba(234, 67, 53, 0.5);
            transform: translateY(-3px) scale(1.08);
          }
          .social-icon-group a.email:hover img {
            filter: none;
          }
        `}</style>

        <Container style={styles.container}>
          <Navbar.Brand href="#home" style={styles.brand}>
            <div style={styles.logoRing}>
              <img src={pradumImg} alt="Pradum Sonkar" style={styles.brandImg} />
            </div>
            <span style={styles.brandName}>Pradum</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" style={styles.toggleBtn} />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" style={styles.navLinksContainer}>
              <Nav.Link
                href="#home"
                className={`custom_nav_link ${activeLink === "home" ? "active" : ""}`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={`custom_nav_link ${activeLink === "skills" ? "active" : ""}`}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={`custom_nav_link ${activeLink === "projects" ? "active" : ""}`}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>

            <div style={styles.navRight}>
              <div className="social-icon-group">
                <a
                  href="https://www.linkedin.com/in/pradum-sonkar/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="linkedin"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/pradum9112/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="github"
                >
                  <img src={navIcon2} alt="GitHub" />
                </a>

                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="whatsapp"
                >
                  <img src={whatsappIcon} alt="WhatsApp" />
                </a>

                <a
                  href={mailtoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="email"
                >
                  <img src={emailIcon} alt="Email" />
                </a>
              </div>

              <HashLink to="#connect" style={{ textDecoration: 'none' }}>
                <button className="connect_btn">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

const styles = {
  navbarDefault: {
    padding: "15px 0",
    transition: "all 0.3s ease-in-out",
    background: "transparent",
    zIndex: 9999,
  },
  navbarScrolled: {
    padding: "10px 0",
    transition: "all 0.3s ease-in-out",
    background: "rgba(18, 18, 38, 0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
    zIndex: 9999,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
  },
  logoRing: {
    width: "40px",
    height: "40px",
    minWidth: "40px",
    borderRadius: "50%",
    padding: "2px",
    background: "linear-gradient(135deg, #ff007f, #00dfd8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flexShrink: 0,
  },
  brandImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
  },
  brandName: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: "1.2rem",
    letterSpacing: "0.5px",
    whiteSpace: "nowrap",
  },
  toggleBtn: {
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  navLinksContainer: {
    display: "flex",
    alignItems: "center",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
};

export default NavBar;