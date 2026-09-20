import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import pradumImg from "../assets/img/pradumImg.png";
import Cv from "./Cv/Cv";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Software Development Engineer",
    "Full Stack Developer (MERN)",
    "Backend & Cloud Engineer"
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(80 - Math.random() * 50);
  const period = 1000;

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

  const tick = useCallback(() => {
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
      setLoopNum((prev) => prev + 1);
      setDelta(250);
    }
  }, [isDeleting, loopNum, text.length, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, tick]);

  return (
    <section className="banner" id="home" style={styles.bannerSection}>
      {/* Media Queries for iPad Air & Tablet Responsiveness */}
      <style>{`
        .banner {
          padding-top: 160px !important;
          padding-bottom: 70px !important;
        }
        @keyframes textGradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        @keyframes rotateGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typing_cursor {
          display: inline-block;
          width: 3px;
          height: 1.2em;
          background-color: #00dfd8;
          margin-left: 5px;
          vertical-align: middle;
          animation: blinkCursor 0.8s infinite;
        }
        .banner_img_wrapper:hover img {
          transform: scale(1.04);
        }

        /* Responsive Media Queries */
        @media (max-width: 991px) {
          .banner {
            padding-top: 130px !important;
          }
          .banner_img_wrapper {
            max-width: 280px !important;
            max-height: 280px !important;
            margin-top: 30px;
          }
        }

        @media (max-width: 576px) {
          .banner_heading {
            font-size: 2.1rem !important;
          }
          .banner_wrap {
            font-size: 1.5rem !important;
          }
          .banner_details_card {
            padding: 15px !important;
          }
        }
      `}</style>

      <Container>
        <Row className="align-items-center">
          {/* Content Column */}
          <Col xs={12} lg={7}>
            <span style={styles.tagline}>✨ Welcome to my Portfolio</span>
            <h1 className="banner_heading" style={styles.heading}>
              Hi, I'm <span style={styles.nameHighlight}>Pradum Sonkar</span>
              <br />
              <span className="banner_wrap" style={styles.wrap}>
                {text}
                <span className="typing_cursor"></span>
              </span>
            </h1>

            <p style={styles.bioText}>
              Results-driven SDE & Full Stack Developer with experience in architecting scalable MERN applications, 
              TypeScript microservices, and GCP cloud infrastructure. Passionate about RESTful API design, system optimization, 
              and solving complex problems.
            </p>

            {/* Glassmorphic Personal Details Card */}
            <div className="banner_details_card" style={styles.detailsCard}>
              <Row style={{ rowGap: "10px" }}>
                <Col xs={12} sm={6}>
                  <p style={styles.detailItem}>
                    <span style={styles.detailLabel}>Degree:</span> B.Tech I.T (2020 - 2024)
                  </p>
                  <p style={styles.detailItem}>
                    <span style={styles.detailLabel}>College:</span> CSJM University, Kanpur
                  </p>
                  <p style={styles.detailItem}>
                    <span style={styles.detailLabel}>Mobile:</span> +91 9112526710
                  </p>
                  <p style={styles.detailItem}>
                    <span style={styles.detailLabel}>Email:</span> pradumsonkar9112@gmail.com
                  </p>
                </Col>
                <Col xs={12} sm={6}>
                  <p style={styles.detailItem}>
                    <span style={styles.detailLabel}>Age:</span> {age} Years
                  </p>
                  <p style={styles.detailItem}>
                    <span style={styles.detailLabel}>Location:</span> Noida / Mau (U.P)
                  </p>
                  <p style={styles.detailItem}>
                    <span style={styles.detailLabel}>Problem Solving:</span> 500+ DSA Solved
                  </p>
                  <p style={{ ...styles.detailItem, display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={styles.detailLabel}>Status:</span>
                    <span style={styles.badgeAvailable}>Available for Hire</span>
                  </p>
                </Col>
              </Row>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <Cv />
            </div>
          </Col>

          {/* Image Column */}
          <Col xs={12} lg={5} className="text-center">
            <div className="banner_img_wrapper" style={styles.imgWrapper}>
              <div style={styles.glowingRing}></div>
              <img
                src={pradumImg}
                alt="Pradum Sonkar"
                style={styles.profileImg}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Internal CSS Object
const styles = {
  bannerSection: {
    position: "relative",
    overflow: "hidden",
  },
  tagline: {
    fontWeight: "600",
    letterSpacing: "1px",
    padding: "8px 16px",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    fontSize: "0.9rem",
    marginBottom: "16px",
    display: "inline-block",
    borderRadius: "20px",
    color: "#e0e0e0",
    backdropFilter: "blur(5px)",
  },
  heading: {
    fontSize: "2.8rem",
    fontWeight: "800",
    letterSpacing: "0.5px",
    lineHeight: "1.2",
    marginBottom: "15px",
    color: "#ffffff",
  },
  nameHighlight: {
    background: "linear-gradient(90deg, #ff007f, #7928ca, #00dfd8, #ff007f)",
    backgroundSize: "300% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "textGradientMove 5s infinite linear",
  },
  wrap: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#00dfd8",
  },
  bioText: {
    color: "#b8c1ec",
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    maxWidth: "100%",
  },
  detailsCard: {
    background: "rgba(255, 255, 255, 0.04)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
  },
  detailItem: {
    margin: "0 0 8px 0",
    fontSize: "0.9rem",
    color: "#d1d5db",
    wordBreak: "break-word",
  },
  detailLabel: {
    color: "#9ca3af",
    fontWeight: "600",
  },
  badgeAvailable: {
    background: "rgba(16, 185, 129, 0.2)",
    color: "#10b981",
    border: "1px solid #10b981",
    padding: "2px 10px",
    borderRadius: "12px",
    fontSize: "0.78rem",
    fontWeight: "600",
    whiteSpace: "nowrap",
    display: "inline-block",
  },
  imgWrapper: {
    position: "relative",
    display: "inline-block",
    borderRadius: "50%",
    padding: "6px",
    width: "100%",
    maxWidth: "340px",
    aspectRatio: "1/1",
    margin: "0 auto",
  },
  glowingRing: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "50%",
    background: "linear-gradient(45deg, #ff007f, #7928ca, #00dfd8)",
    animation: "rotateGlow 6s linear infinite",
    zIndex: 1,
    filter: "blur(8px)",
    opacity: 0.8,
  },
  profileImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    position: "relative",
    zIndex: 2,
    border: "4px solid rgba(255, 255, 255, 0.2)",
    transition: "transform 0.4s ease",
  },
};

export default Banner;