import React from "react";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import whatsappIcon from "../assets/img/whatsappIcon.svg";
import emailIcon from "../assets/img/emailIcon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "9112526710"; 
  const whatsappMessage = "Hello, I'm reaching out regarding potential opportunities."; 
  const mailtoLink = "mailto:pradumsonkar9112@gmail.com?subject=Inquiry&body=Hello, I'm reaching out regarding potential opportunities.";

  return (
    <footer style={styles.footer}>
      {/* Dynamic Keyframes & Authentic Brand Colors on Hover */}
      <style>{`
        @keyframes colorGradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        .footer_logo_container:hover {
          transform: translateY(-3px) scale(1.03);
        }
        .footer_permalinks li a:hover {
          color: #00dfd8 !important;
        }

        /* Base Social Icon Circle Style */
        .footer_social_icons a {
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
        .footer_social_icons a img {
          width: 18px;
          height: 18px;
          filter: brightness(0) invert(1);
          transition: all 0.3s ease-in-out;
        }

        /* Brand Specific Hover Effects */
        /* 1. LinkedIn Blue */
        .footer_social_icons a.linkedin:hover {
          background: rgba(10, 102, 194, 0.2);
          border-color: #0a66c2;
          box-shadow: 0 0 15px rgba(10, 102, 194, 0.5);
          transform: translateY(-3px) scale(1.08);
        }
        .footer_social_icons a.linkedin:hover img {
          filter: none;
        }

        /* 2. GitHub */
        .footer_social_icons a.github:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: #ffffff;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
          transform: translateY(-3px) scale(1.08);
        }
        .footer_social_icons a.github:hover img {
          filter: brightness(0) invert(1);
        }

        /* 3. WhatsApp Green */
        .footer_social_icons a.whatsapp:hover {
          background: rgba(35, 211, 102, 0.2);
          border-color: #25d366;
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.5);
          transform: translateY(-3px) scale(1.08);
        }
        .footer_social_icons a.whatsapp:hover img {
          filter: none;
        }

        /* 4. Email Red/Orange */
        .footer_social_icons a.email:hover {
          background: rgba(234, 67, 53, 0.2);
          border-color: #ea4335;
          box-shadow: 0 0 15px rgba(234, 67, 53, 0.5);
          transform: translateY(-3px) scale(1.08);
        }
        .footer_social_icons a.email:hover img {
          filter: none;
        }
      `}</style>

      <div style={styles.container}>
        {/* Animated & Separated Name Block */}
        <a href="#home" className="footer_logo_container" style={styles.logoContainer}>
          <span style={styles.subtitle}>Designed and Developed by</span>
          <span style={styles.authorName}>Pradum Sonkar</span>
        </a>

        {/* Permalinks */}
        <ul className="footer_permalinks" style={styles.permalinks}>
          <li>
            <a href="#home" style={styles.link}>Home</a>
          </li>
          <li>
            <a href="#skills" style={styles.link}>Skills</a>
          </li>
          <li>
            <a href="#projects" style={styles.link}>Project</a>
          </li>
        </ul>

        {/* Social Icons with Brand Hover Classes */}
        <div className="footer_social_icons" style={styles.socialIconContainer}>
          <a
            href="https://www.linkedin.com/in/pradum-sonkar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="linkedin"
          >
            <img src={navIcon1} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/pradum9112/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="github"
          >
            <img src={navIcon2} alt="GitHub" />
          </a>
         
          <a
            href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me on WhatsApp"
            className="whatsapp"
          >
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>

          <a
            href={mailtoLink} 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email me"
            className="email"
          >
            <img src={emailIcon} alt="Email" />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer_copyright text-center" style={styles.copyright}>
          <small>© {currentYear} Copy rights. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

// Internal Style Object
const styles = {
  footer: {
    width: "100%",
    padding: "2.5rem 0",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    margin: "0 auto",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    marginBottom: "1.5rem",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  },
  subtitle: {
    fontSize: "0.85rem",
    color: "#a1a1aa",
    fontWeight: "500",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginBottom: "6px",
  },
  authorName: {
    fontSize: "1.8rem",
    fontWeight: "700",
    letterSpacing: "1px",
    background: "linear-gradient(90deg, #ff007f, #7928ca, #00dfd8, #ff007f)",
    backgroundSize: "300% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "colorGradientMove 4s infinite linear",
  },
  permalinks: {
    display: "flex",
    gap: "1.8rem",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    padding: 0,
    margin: "0 0 1.8rem 0",
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "1.05rem",
    fontWeight: "500",
    letterSpacing: "0.5px",
    transition: "color 0.3s ease",
  },
  socialIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "1.5rem",
  },
  copyright: {
    margin: 0,
    color: "#71717a",
  },
};

export default Footer;