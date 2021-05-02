import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe} from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faFacebook, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = ({project}) => {
   
    return (
        <div className="col-md-4 col-sm-12" >
        <div className="service-box">
           <img className='project-image' src={project.image} alt=""/>
           <h4><a href="">{project.name}</a></h4>
         <div className='d-flex justify-content-center'>
            <a target="_blank" href={project.live}><FontAwesomeIcon className="brand-icon" icon={faGlobe} /></a>
           <a target="_blank" href={project.github}><FontAwesomeIcon className="brand-icon" icon={faGithub} /></a>
         </div>
        </div>
       
     </div>
    );
};

export default ProjectDetails;