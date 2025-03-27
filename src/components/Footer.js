import React from "react";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import whatsappIcon from "../assets/img/whatsappIcon.svg";
import emailIcon from "../assets/img/emailIcon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "9112526710"; 
  const whatsappMessage = "Hello, I'm reaching out regarding potential opportunities."; 
  const mailtoLink = "mailto:pradumsonkar9112@gmail.com?subject=Inquiry&body=Hello, I'm reaching out regarding potential opportunities."; // Corrected mailto link

  return (
    <footer>
      <div className="container">
        <a href="#" className="footer_logo">
          Designed and Developed by Pradum Sonkar
        </a>
        <ul className="permalinks" style={{ marginRight: '23px'}}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
        </ul>
        <div className="social-icon text-center">
          <a href="https://www.linkedin.com/in/pradum-sonkar//" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={navIcon1} alt="LinkedIn" />
          </a>
          <a href="https://github.com/pradum9112/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={navIcon2} alt="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/pradum_sonkar_00/?%2F"
            target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          >
            <img src={navIcon3} alt="Instagram" />
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

          {/* Email Link
          <a
            href={mailtoLink} 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email me"
          >
            <img src={emailIcon} alt="email" />
          </a> */}
        </div>

        <div className="footer_copyright text-center" style={{ marginLeft: '3px'}}>
          <small>© {currentYear} Copy rights. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;