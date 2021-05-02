import React from "react";
// import './About.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
const Skills = () => {

  return (
   
    <div>
        <div className="container"        >
          <Progress percent={88} status="success" />
        </div>    

    </div>
  );
};

export default Skills;
