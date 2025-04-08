import React from "react";
import "./Cv.css";

const Cv = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1ezK_G0HC-KuAtTQQcdeLDS-O24QU98Ec/view?usp=sharing"
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
