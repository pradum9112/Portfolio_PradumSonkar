import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ceoitbox from "../assets/img/ceoitbox-certificaate.png";
import padelindia from "../assets/img/padelindai-certificate.png";
import mlcertificate from "../assets/img/ml-certificates.png";

const certificates = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1XfTkdhpxOJzrT3Ah3a0lpNY5zsOMygfi/view?usp=sharing",
    title: "CEOITBOX SDE Intern",
    image: ceoitbox,
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/1H2zYd23YmCOQN6KE4ElKj6OSyU0s36dy/view?usp=sharing",
    title: "Padel India Software Developer",
    image: padelindia,
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/11-OpGVZjh5lSl6FpMDI2GEj5ST7IWUQZ/view?usp=sharing",
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
    if (e.target.classList.contains("zoom-modal") || e.target.classList.contains("close-btn")) {
      setZoomedImage(null);
    }
  };

  return (
    <section id="certificates" style={styles.section}>
      {/* Dynamic Styling, Visible Arrows & Hover Effects */}
      <style>{`
        .certificate_header {
          font-size: 2.8rem;
          font-weight: 800;
          text-align: center;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #ff007f, #00dfd8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 40px;
        }

        .certificate_item {
          background: #080810 !important;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 20px;
          margin: 15px;
          text-align: center;
          transition: all 0.35s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .certificate_item:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 223, 216, 0.4);
          box-shadow: 0 15px 35px rgba(0, 223, 216, 0.15), 0 0 20px rgba(255, 0, 127, 0.2);
        }

        .certificate_img_container {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          background: #000;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .certificate_img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          cursor: zoom-in;
          transition: transform 0.4s ease;
          display: block;
        }

        .certificate_item:hover .certificate_img {
          transform: scale(1.04);
        }

        .certificate_item h3 {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 20px 0 15px 0;
          letter-spacing: 0.5px;
        }

        /* Glowing Modern Action Button */
        .cert_view_btn {
          background: linear-gradient(90deg, #ff007f, #7928ca);
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 9px 24px;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 25px;
          text-decoration: none !important;
          transition: all 0.3s ease;
          display: inline-block;
          margin-top: auto;
        }

        .cert_view_btn:hover {
          background: linear-gradient(90deg, #7928ca, #00dfd8);
          box-shadow: 0 0 15px rgba(0, 223, 216, 0.5);
          transform: translateY(-2px);
        }

        /* HIGH-VISIBILITY CAROUSEL ARROWS FOR BLACK & WHITE BACKGROUNDS */
        .react-multiple-carousel__arrow {
          background: rgba(20, 20, 35, 0.85) !important;
          border: 1px solid rgba(255, 255, 255, 0.25) !important;
          backdrop-filter: blur(10px);
          width: 46px !important;
          height: 46px !important;
          min-width: 46px !important;
          border-radius: 50% !important;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.9), 0 0 8px rgba(255, 255, 255, 0.2) !important;
          z-index: 10 !important;
        }

        .react-multiple-carousel__arrow::before {
          color: #ffffff !important;
          font-size: 20px !important;
          font-weight: bold !important;
        }

        .react-multiple-carousel__arrow:hover {
          background: linear-gradient(135deg, #ff007f, #00dfd8) !important;
          border-color: transparent !important;
          box-shadow: 0 0 20px rgba(0, 223, 216, 0.6) !important;
          transform: scale(1.1);
        }

        /* Modal Close Button */
        .close-btn {
          position: absolute;
          top: 20px;
          right: 30px;
          color: #ffffff;
          font-size: 32px;
          cursor: pointer;
          font-weight: bold;
          transition: color 0.2s ease;
        }
        .close-btn:hover {
          color: #ff007f;
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 className="certificate_header">Certificates</h1>

        <Carousel 
          responsive={responsive} 
          infinite={true} 
          className="certificate-slider"
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {certificates.map(({ id, link, title, image }) => (
            <div key={id} className="certificate_item">
              <div className="certificate_img_container">
                <img
                  src={image}
                  alt={title}
                  className="certificate_img"
                  onClick={() => handleZoom(image)}
                />
              </div>

              <h3>{title}</h3>

              <div>
                <a 
                  href={link} 
                  className="cert_view_btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modal for Zoomed Image */}
      {zoomedImage && (
        <div className="zoom-modal" onClick={handleClose} style={modalStyle}>
          <span className="close-btn" onClick={handleClose}>&times;</span>
          <img src={zoomedImage} alt="Zoomed Certificate" style={zoomedImgStyle} />
        </div>
      )}
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#000000",
    position: "relative",
  },
};

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.88)",
  backdropFilter: "blur(8px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10000,
  padding: "20px",
};

const zoomedImgStyle = {
  maxWidth: "85vw", 
  maxHeight: "80vh",
  borderRadius: "12px",
  boxShadow: "0 0 30px rgba(0, 223, 216, 0.3), 0 0 10px rgba(255, 0, 127, 0.3)",
  cursor: "zoom-out",
  border: "1px solid rgba(255, 255, 255, 0.2)",
};

export default Certificates;