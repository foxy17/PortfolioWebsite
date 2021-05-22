import React from "react";
import Service from "../../editable-stuff/youngun.JPG";
import useWindowDimensions from "../size";
import AwesomeSlider from "react-awesome-slider";
import "../../slider.css";
import { Row, Col, Image } from "react-bootstrap";
// import Culture from "../../editable-stuff/culture.jpg"

const Freelance = () => {
  const { height, width } = useWindowDimensions();
  const divStyle = {
    width: width * 0.9,
    height: "450",
  };
  return (
    <div
      id="freelance"
      className="jumbotron jumbotron-fluid m-0 "
      style={{ backgroundColor: "white" ,height:height }}
    >
      <div className="container container-fluid align-self-center ">
        <div className="row ">
          <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-3 text-center">Freelance Feedbacks</h1>
            <br />
            <div style={divStyle} className="col d-lg-inline align-self-center">
              <AwesomeSlider className="aws-btn ">
                <div>
                  <Row>
                    <Col xs className="lead">
                      <b>Arnav</b> showed great responsibility and dedication towards
                      his work and was the one who started the end to end tech
                      automation planning and execution for our Ad agency, Ad
                      agenicies that are well know for their messed up
                      operations.He managed to streamline the process for us
                      by understanding all the potential gaps.Few qualities that we loved about him :
                      <ul>
                          <li>smart approach towards the tech solutions that he
                      plan/executes.</li>
                          <li>always on toes when it comes to fixing bugs and
                      understands the urgency of work.</li>
                          <li>takes full responsibility about his work.</li>
                    </ul>
                    </Col>
                    <Col xs  className="m-auto">
                    <a href="https://youngun.in" target="_blank">
                      <Image
                        className="d-block mx-auto "
                        src={Service}
                        alt="SEC"
                        fluid
                      
                      />{" "}
                      </a>
                      <Row  className="lead d-block mx-auto">
                      <b className="h3">-Saksham Jadon</b><br/>
                      &nbsp;&nbsp;Founder <a href="https://youngun.in" target="_blank">Youngun</a>

                      </Row>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row className="justify-content-md-center">
                    <Col xs className="lead" md={7}>
                      <b>Arnav</b> is a highly skilled full stack developer and has deep knowledge about latest technology. 
                      Arnav is a really great person to work with. Looking forward to working with him again.
                      <br/>
                      <br/>
                      <b className="h3">-Gaggan Talreja</b><br/>
                      &nbsp;&nbsp;Co-worker <a href="https://memeunion.in" target="_blank">Memeunion</a>
                    </Col>
                  </Row>
                </div>
              </AwesomeSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
