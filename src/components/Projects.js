import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { WorkHandler } from "../components/WorkHandler.js";

export const Projects = () => {



  return (
    <section className="project" id="projects">
      <Container style={{display: "flex"}}>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This is some of the projects I have worked on. Covering different types of products and using different tools. </p>
                <Tab.Container defaultActiveKey="first" >
                  <Nav variant="tabs" style={{justifyContent: "center", fontSize: 30, }} defaultActiveKey="first">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Beyond The Federation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">3D Freelance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Axess</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Yucatan i6</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Vicente Fernandez</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <WorkHandler numW = {0}></WorkHandler>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="Work">
                        <WorkHandler numW = {1}></WorkHandler>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <WorkHandler numW = {2}></WorkHandler>
                      </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <WorkHandler numW = {3}></WorkHandler>
                      </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <WorkHandler numW = {4}></WorkHandler>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="Background" src={colorSharp2}></img>
    </section>
  )
}
