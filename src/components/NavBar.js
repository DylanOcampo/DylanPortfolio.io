import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/DylanOcampo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';


import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {


  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div style={{width: 'auto', height: 'auto', justifyContent: 'center', alignItems: 'center'}}>
    <Router  >
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} >
        <Container >
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/dylan-ocampo-1849b3240/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.artstation.com/dylan-ocampo"><img src={navIcon2} alt="" /></a>
              </div>
                  <button
                        type="button" 
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href='https://drive.google.com/file/d/1mGZBPx25Enys2brJM1kvT1si_fG24Zxz/view?usp=sharing';
                          }}
                    > Check CV</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
    </div>
  )
}
