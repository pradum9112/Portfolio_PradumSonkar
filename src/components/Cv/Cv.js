import React from "react";

const Cv = () => {
  return (
    <div className="cta-container" style={styles.ctaContainer}>
      {/* Internal Animations & Hover Effects */}
      <style>{`
        .cv-btn-download {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px 28px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none !important;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease-in-out;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .cv-btn-download:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: #00dfd8;
          color: #00dfd8 !important;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 223, 216, 0.35);
        }

        .cv-btn-hire {
          background: linear-gradient(90deg, #ff007f, #7928ca);
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px 30px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none !important;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 15px rgba(255, 0, 127, 0.4);
        }

        .cv-btn-hire:hover {
          background: linear-gradient(90deg, #7928ca, #00dfd8);
          transform: translateY(-3px);
          box-shadow: 0 6px 22px rgba(0, 223, 216, 0.5);
        }
      `}</style>

      {/* Download CV Link */}
      <a
        href="https://drive.google.com/file/d/1Otzn-pj4micKPMwczcmIP6EXEu19EVaK/view?usp=sharing"
        download
        className="cv-btn-download"
        target="_blank"
        rel="noreferrer"
      >
        <span>Download CV</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </a>

      {/* Hire Me Link */}
      <a href="#connect" className="cv-btn-hire">
        <span>Hire Me</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </a>
    </div>
  );
};

const styles = {
  ctaContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "18px",
    marginTop: "25px",
    flexWrap: "wrap",
  },
};

export default Cv;