import React from "react";
// import './About.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
const Skills = () => {

  return (
   
    <div>
        <div className="container">
          <h1 className="text-center">Skills</h1>
          <label htmlFor="">HTML</label>
          <Progress percent={95} status="success" />
          <label htmlFor="">CSS</label>
          <Progress percent={85} status="success" />
          <label htmlFor="">Bootstrap</label>
          <Progress percent={90} status="success" />
          <label htmlFor="">Javascript</label>
          <Progress percent={85} status="success" />
          <label htmlFor="">React</label>
          <Progress percent={80} status="success" />
          <label htmlFor="">MongoDB</label>
          <Progress percent={70}  />
        </div>    

    </div>
  );
};

export default Skills;
