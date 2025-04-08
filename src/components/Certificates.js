import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ceoitbox from "../assets/img/ceoitbox-certificaate.png"
import padelindia from "../assets/img/padelindai-certificate.png"
import mlcertificate from "../assets/img/ml-certificates.png"

const certificates = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1rwTV1zKDk7mXdsokYZkXMVulpiEey093/view?usp=sharing",
    title: "CEOITBOX Software Developer",
    image: ceoitbox,
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/12Hwh4_B_3KLXpF6BvOvVbdeuAIRuhR6x/view?usp=sharing",
    title: "Padel India Software Developer",
    image: padelindia,
  },
  
  {
    id: 3,
    link: "https://drive.google.com/file/d/1Iqmt8iAfIaEBEOHwNxMtx-SkU3MabZlx/view?usp=sharing",
    title: "Machine Learning with Python",
    image: mlcertificate,
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Certificates = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleZoom = (image) => {
    setZoomedImage(image);
  };

  const handleClose = (e) => {
    if (e.target.classList.contains("zoom-modal")) {
      setZoomedImage(null);
    }
  };

  return (
    <section id="certificates" className="portfolio-section">
      <h1 className="project_header">Certificates</h1>
      <Carousel responsive={responsive} infinite={true} className="certificate-slider" style={{ backgroundColor: "black", margin: "20px 20px" }}>
        {certificates.map(({ id, link, title, image }) => (
          <div key={id} className="portfolio_item" style={{ backgroundColor: "black", margin: "20px 20px", padding: "15px", textAlign: "center" }}>
            <img
              src={image}
              alt={title}
              style={{ width: "100%", height: "auto", marginBottom: "30px", cursor: "zoom-in", borderRadius: "8px", maxHeight: "250px", objectFit: "cover" }} 
              onClick={() => handleZoom(image)}
            />
            <h3>{title}</h3>
            <a href={link} className="project_btn" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </Carousel>

      {/* Modal for Zoomed Image */}
      {zoomedImage && (
        <div className="zoom-modal" onClick={handleClose} style={modalStyle}>
          <img src={zoomedImage} alt="Zoomed Certificate" style={smallImageStyle} />
        </div>
      )}
    </section>
  );
};

// Modal Styles (Decreased Zoomed Image Size)
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const smallImageStyle = {
  width: "50vw", 
  maxHeight: "65vh",
  borderRadius: "8px",
  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
  cursor: "zoom-out",
};

export default Certificates;
