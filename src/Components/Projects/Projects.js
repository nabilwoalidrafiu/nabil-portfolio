import "./Projects.css";
import React from "react";
import car from '../../images/car.PNG'
import cycle from '../../images/cycle.PNG'
// import car from '../../images/car.PNG'
// import car from '../../images/car.PNG'
// import car from '../../images/car.PNG'
// https://i.ibb.co/Q8y62hg/cycle.png
// https://i.ibb.co/Lk58C5f/fashion.png
// https://i.ibb.co/cTj9Bwv/league.png
// https://i.ibb.co/k0yqPpw/rider.png
// https://i.ibb.co/7YgKCsP/car.png
import './Projects.css'
import ProjectDetails from './ProjectDetails';

const Projects = () => {
  const projects =[
    {id:1, name: 'Car Care', image: 'https://i.ibb.co/7YgKCsP/car.png', live: 'https://car-care-87fdd.web.app/', github: 'https://github.com/nabilwoalidrafiu/car-care-client'},
    {id:2, name: 'Cycle Hut', image: 'https://i.ibb.co/Q8y62hg/cycle.png', live: 'https://cycle-hut.web.app/', github: 'https://github.com/nabilwoalidrafiu/cycle-hut-client'},
    {id:3, name: 'Rapid Riders', image: 'https://i.ibb.co/k0yqPpw/rider.png', live: 'http://rapid-riders.web.app/', github: 'https://github.com/nabilwoalidrafiu/rapid-riders'},
    {id:4, name: 'Premier League', image: 'https://i.ibb.co/cTj9Bwv/league.png', live: 'https://my-premier-league.netlify.app/', github: 'https://github.com/nabilwoalidrafiu/my-premier-league'},
    {id:5, name: 'Penguin Fashion', image: 'https://i.ibb.co/Lk58C5f/fashion.png', live: 'https://nabilwoalidrafiu.github.io/penguin-fashion/', github: 'https://github.com/nabilwoalidrafiu/penguin-fashion'},

  ]
  return (
    <div>
        <section id="projects" className="services">
        <div className="container">
           <div className="section-title">
              <h2 >Projects</h2>
              <p className="col-md-8 offset-md-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
           </div>
          
           <div className="row text-center container m-auto">
                  {
                        projects.map(project => <ProjectDetails className="row" key={project.id} project={project}></ProjectDetails>)
                    }
              
           </div>
        </div>
     </section>
    </div>
  );
};

export default Projects;