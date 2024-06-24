import 'react-multi-carousel/lib/styles.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HTML from '../assets/img/html.png';
import CSS from '../assets/img/css.png';
import JavaScript from '../assets/img/javascript.png';
import ReactImg from '../assets/img/react.png';
import Node from '../assets/img/node.png';
import GitHub from '../assets/img/github.png';

import unity from '../assets/img/Unity.png';
import unreal from '../assets/img/unreal.png';
import blender from '../assets/img/blender.png';

import adobe from '../assets/img/Adobe.png';
import python from '../assets/img/Python.png';
import maya from '../assets/img/maya.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
          <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
            <Row>
              <Col md={2}><img src={unity} alt = ""/> <h3>Unity</h3>
              </Col>
              <Col md={2} ><img src={unreal} alt = ""/><h3>Unreal</h3></Col>
              <Col md={2} ><img src={adobe} alt = ""/><h3>Adobe</h3></Col>
              <Col md={2}><img src={blender} alt = ""/> <h3>Blender</h3></Col>
              <Col md={2} ><img src={maya} alt = ""/> <h3>Maya</h3></Col>
              <Col md={2} ><img src={python} alt = ""/><h3>Python</h3></Col>
              
              
            </Row>
            <Row>
            <Col md={2}><img src={HTML} alt = ""/><h3>HTML</h3></Col>
              <Col md={2}><img src={CSS} alt = ""/><h3>CSS</h3></Col>
              <Col md={2}><img src={JavaScript} alt = ""/><h3>JavaScript</h3></Col>
              <Col md={2}><img src={ReactImg} alt = ""/><h3>React</h3></Col>
              <Col md={2} ><img src={Node} alt = ""/><h3>Node</h3></Col>
              <Col md={2} ><img src={GitHub} alt = ""/><h3>Github</h3></Col>
            </Row>
            
          </div>

        </div>
    </section>
  )
}
