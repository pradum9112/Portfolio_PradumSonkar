import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    id: 1,
    video: "https://www.youtube-nocookie.com/embed/XfIalGmJsuw", 
    title: "ToLet-RoomOnRent",
    github: "https://github.com/pradum9112/Tolet-RoomOnRent",
    Live: "https://to-let-room-on-rent.vercel.app/",
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
    video: "https://www.youtube-nocookie.com/embed/PqIaXGO0-r4", 
    title: "My-AmazonClone",
    github: "https://github.com/pradum9112/My-AmazonClone.git",
    Live: "https://amazone-clone-wgb4.onrender.com/",
  },
  {
    id: 4,
    video: "https://www.youtube-nocookie.com/embed/BeINkv-dccU", 
    title: "ToDoList",
    github: "https://github.com/pradum9112/ToDoList.git",
    Live: "https://to-do-list1-d80oao1cv-pradum9112.vercel.app/",
  },
  {
    id: 5,
    video: "https://www.youtube-nocookie.com/embed/5gTPXBGctgc", 
    title: "ReactQuizApp",
    github: "https://github.com/pradum9112/ReactQuizApp.git",
    Live: "https://react-quiz-app-red.vercel.app",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Portfolio = () => {
  return (
    <section id="projects" className="portfolio-section">
      <h1 className="project_header">Projects</h1>
      <Carousel responsive={responsive} infinite={true} className="portfolio-slider" style={{ backgroundColor: 'black', margin: '20px 20px' }}>
        {data.map(({ id, video, title, github, Live }) => (
          <div key={id} className="portfolio_item" style={{ backgroundColor: 'black', margin: '20px 20px' }}>
            <div className="portfolio_item-video">
              <iframe
                width="100%" 
                height="250" 
                src={video}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="project_btn " target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={Live} className="project_btn " target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Portfolio;
