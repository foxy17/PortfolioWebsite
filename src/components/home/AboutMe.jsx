import React, { useState, useEffect } from "react";
import axios from "axios";
import Pdf from "../../editable-stuff/arnav_CV.pdf";
import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
} from "../../editable-stuff/configurations.json";

const AboutMe = () => {
  const [resumeURL] = useState(Pdf);
  var currentlink = <a target="_blank" href='https://www.newsg8r.com/'>Newsg8r</a>;
  var link = <a target="_blank" href='https://www.youngun.in/'>Youngun's</a>;
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          <div className={`col-lg-12`}>
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center">I'm a Mumbai based software engineer who specializes in building digital experiences on web and mobile devices. 
            My interest in web development started back in 2017 when I decided to build a OLX like website using Django for my college to buy stuff from the seniors graduating. 
            It taught me a lot about HTML & CSS!
            <br/>
            <br/>
            Fast-forward to today, and I've had the privilege of working at an advertising agency and 2 start-ups.
            I currently work as a Full stack and Dev-ops engineer for <b>{currentlink}</b> and also handle their app development. 
            <br/>
            <b>My greatest achievement</b> was to reduce <b>{link}</b> operations time and work by 70% using simple CMS solutions built on Flask and Nodejs.
            </p>
            {resumeURL && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
