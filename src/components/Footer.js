import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import logo from '../assets/img/DylanOcampo.png';


import Button from 'react-bootstrap/Button';

export const Footer = () => {
  return (
    <footer  style={{marginTop: 10}}>
      <Container>
        <Row  >
          
          <Col >
            <img src={logo} alt="Logo" style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center', marginBottom: 20, paddingLeft: 5}} />
          </Col>
          
          <Col className="text-center text-sm-end" style={{paddingTop: 10}}><Button variant="light"  onclick="window.open('dylanomar@live.com.mx');">Email Me!</Button></Col>
          <Col   className="text-center text-sm-end" style={{paddingTop: 10}}>
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p style ={{paddingTop: 10}}>Copyright 2022. All Rights Reserved</p>
          </Col>
          
        </Row>
        
      </Container>
    </footer>
  )
}
