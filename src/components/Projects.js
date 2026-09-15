import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dsaAlgoCraftSeries from "../assets/img/dsaAlgoCraft.png"

const data = [
  {
    id: 1,
    video: "https://www.youtube-nocookie.com/embed/XfIalGmJsuw", 
    title: "ToLet-RoomOnRent",
    github: "https://github.com/pradum9112/ToLet-RoomRentify",
    Live: "https://to-let-room-rentify.vercel.app/",
  },
  {
    id: 2,
    video: "https://www.youtube-nocookie.com/embed/Txgg_7HKDLA", 
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
    <section id="projects" className="portfolio-section">
      <h1 className="project_header">Projects</h1>
      <Carousel responsive={responsive} infinite={true} className="portfolio-slider" style={{ backgroundColor: 'black', margin: '20px 20px' }}>
        {data.map((item) => (
          <div key={item.id} className="portfolio_item" style={{ backgroundColor: 'black', margin: '20px 20px' }}>
            <div className="portfolio_item-video">
              {item.video ? (
                <iframe
                  width="100%" 
                  height="250" 
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
                  style={{ width: "100%", height: "250px", objectFit: "contain", backgroundColor: "#000" }} 
                />
              )}
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio_item-cta">
              <a href={item.github} className="project_btn" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={item.Live} className="project_btn" target="_blank" rel="noopener noreferrer">
                {item.type === "dsa" ? "Explore Repo" : "Live"}
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Portfolio;