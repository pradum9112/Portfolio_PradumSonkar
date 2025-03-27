import React from "react";
import "./Cv.css";

const Cv = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1_dbWNv1UpS_bSg41-jz8bDN0Dv8XqwmH/view?usp=sharing"
        download
        className="btn"
        target="_blank"
      >
        Download CV
      </a>
      <a href="#connect" className="btn">
        Hire Me
      </a>
    </div>
  );
};

export default Cv;
