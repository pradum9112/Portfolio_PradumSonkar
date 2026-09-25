import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dsaAlgoCraftSeries from "../assets/img/dsaAlgoCraft.png";

const data = [
  {
    id: 1,
    video: "https://www.youtube.com/embed/I9pVL7xlFK4", 
    title: "ToLet-RoomRentify",
    github: "https://github.com/pradum9112/ToLet-RoomRentify",
    Live: "https://to-let-room-rentify.vercel.app/",
  },
  {
    id: 2,
    video: "https://youtube.com/embed/la0IQDUz_kw", 
    title: "ChatHub",
    github: "https://github.com/pradum9112/ChatHub",
    Live: "https://chatapp-ndtd.onrender.com/",
  },
  {
    id: 3,
    type: "DSA", 
    title: "AlgoCraft - Daily DSA Series",
    description: "Daily Data Structures & Algorithms problem solving covering LeetCode, GFG, and core CS patterns.",
    image: `${dsaAlgoCraftSeries}`,
    github: "https://github.com/pradum9112/AlgoCraftSeries-180DaysOfDSA",
    Live : "https://github.com/pradum9112/AlgoCraftSeries-180DaysOfDSA"
  }
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Portfolio = () => {
  return (
    <section id="projects" style={styles.portfolioSection}>
      {/* Modern Black Styling & Glowing Effects */}
      <style>{`
        .portfolio_header {
          font-size: 2.8rem;
          font-weight: 800;
          text-align: center;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #ff007f, #00dfd8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 40px;
        }

        .portfolio_item {
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
          position: relative;
          overflow: hidden;
        }

        .portfolio_item:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 223, 216, 0.4);
          box-shadow: 0 15px 35px rgba(0, 223, 216, 0.15), 0 0 20px rgba(255, 0, 127, 0.2);
        }

        .portfolio_item-video {
          border-radius: 12px;
          overflow: hidden;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .portfolio_item h3 {
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 20px 0 15px 0;
          letter-spacing: 0.5px;
        }

        .portfolio_item-cta {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: auto;
        }

        /* Glass / Gradient CTA Buttons */
        .project_btn {
          padding: 9px 20px;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 25px;
          text-decoration: none !important;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .project_btn_github {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .project_btn_github:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #ffffff;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .project_btn_live {
          background: linear-gradient(90deg, #ff007f, #7928ca);
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .project_btn_live:hover {
          background: linear-gradient(90deg, #7928ca, #00dfd8);
          box-shadow: 0 0 15px rgba(0, 223, 216, 0.5);
          transform: translateY(-2px);
        }

        /* Carousel Navigation Buttons */
        .react-multiple-carousel__arrow {
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          backdrop-filter: blur(8px);
        }

        .react-multiple-carousel__arrow:hover {
          background: linear-gradient(90deg, #ff007f, #00dfd8) !important;
          border-color: transparent !important;
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 className="portfolio_header">Featured Projects</h1>

        <Carousel 
          responsive={responsive} 
          infinite={true} 
          className="portfolio-slider"
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {data.map((item) => (
            <div key={item.id} className="portfolio_item">
              <div className="portfolio_item-video">
                {item.video ? (
                  <iframe
                    width="100%" 
                    height="230" 
                    src={item.video}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: "100%", height: "230px", objectFit: "cover", backgroundColor: "#000" }} 
                  />
                )}
              </div>

              <h3>{item.title}</h3>

              <div className="portfolio_item-cta">
                <a 
                  href={item.github} 
                  className="project_btn project_btn_github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a 
                  href={item.Live} 
                  className="project_btn project_btn_live" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {item.type === "DSA" ? "Explore Repo" : "Live Demo"}
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const styles = {
  portfolioSection: {
    padding: "80px 20px",
    backgroundColor: "#000000",
    position: "relative",
  },
};

export default Portfolio;