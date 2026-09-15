import React from "react";
import "./Cv.css";

const Cv = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1OtVTX9T7uagp_X4Scg_ird7VP5V_HSwJ/view?usp=sharing"
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
