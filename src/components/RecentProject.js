import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { WorkHandler } from "../components/WorkHandler.js";

export const RecentProject = () => {

    return (

        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", flexWrap: "wrap"}}> 
            <h1 style={{paddingBottom: "20px"}}> What am I currently working on?</h1>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <Tab.Container defaultActiveKey="first" >
                  <Nav variant="tabs" style={{justifyContent: "center", fontSize: 30, }} defaultActiveKey="first">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Scape</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">MovieDatabase</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <WorkHandler numW = {5}></WorkHandler>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="Work">
                        <WorkHandler numW = {6}></WorkHandler>
                      </div>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>

        </div>


    )
}