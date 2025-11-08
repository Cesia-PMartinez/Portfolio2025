import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <footer id="footer-section" className="bg-dark text-white py-5">
      <Container>
        
        <Row className="justify-content-center text-center py-5">
          <Col md={8}> 
            <h2 className="title-main" style={{fontSize: '5vw', lineHeight: '1', fontFamily: 'Vina Sans', fontWeight:'normal'}}>
                <h4 className='textjustbecause' style={{fontFamily: 'Poppins'}}>
                  "The only way to do great work is to love what you do"
                </h4>
                LET'S WORK TOGETHER
            </h2>
          </Col>
        </Row>

      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <div className="social-links-container-two"> 
              <a href="https://github.com/Cesia-PMartinez/Portfolio2025" target="_blank" rel="noopener noreferrer" className="social-icon-two">
                <FaGithub size={30} />
              </a>
                          
              <a href="https://www.linkedin.com/in/cesia-pineda-290538368/" target="_blank" rel="noopener noreferrer" className="social-icon-two">
                <FaLinkedin size={30} />
              </a>
          </div>
        </Col>
      </Row>

        <hr className="bg-secondary" />
        
        <Row className="mt-4">
          <Col md={4} className="text-start">
            <p className="header-caption">FUTURE GRAPHIC DESIGN</p>
          </Col>
          <Col md={4} className="text-center">
            <p className="header-caption">Cesia Pineda</p>
          </Col>
          <Col md={4} className="text-end">
            <p className="header-caption">© 2025</p>
          </Col>
        </Row>



      </Container>
    </footer>
  );
}

export default Footer;