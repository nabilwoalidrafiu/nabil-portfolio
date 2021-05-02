import React from "react";
import './About.css';
import Button from '@material-ui/core/Button';

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Jonathan Doe" },
    { id: 2, title: "Email:", text: "nabilwoalidrafiu@gmail.com" },
    { id: 3, title: "Phone:", text: "+8801886537813" },
    { id: 4, title: "Linkedin", text: "Linkedin.com/in/nabil-woalid-rafiu" },
  ]);
  return (
   
    <div id="about" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-md-6">
            <div className="about__img">
              <img src="https://i.ibb.co/SP7VZfg/nabil.png" alt="man" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
               I'm Nabil Woalid Rafiu. I'm a Front End React Js Web Developer.  
              </div>
              <div className="about__info-p2">
              {/* <Button variant="contained">Default</Button> */}
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-md-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
