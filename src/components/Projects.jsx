import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import healthFutureImage from '../images/healthandfuture.png';
import sevenImage from '../images/seven.png';
import yumFullImage from '../images/yumfull.jpeg';

function Projects() {
  return (
    <section className="bg-white text-dark section-padding">
      <Container fluid> 
        <h2 className="text-center mb-5" style={{fontSize: '3.5rem', fontFamily: 'Vina Sans'}}>
            PROJECTS I'VE WORKED IN BEFORE
        </h2>
        
        <Row className="bg-dark text-white align-items-center g-0 mb-5"> 
          <Col md={6} className="p-5">
            <h3 className="header-caption mb-1">PROJECT 1</h3>
            <h2 className="title-main" style={{fontSize: '5vw', lineHeight: '1', fontWeight:'normal'}}>HEALTH&FUTURE</h2>
            
            <p className="mt-4">
              A mental and phisical development application. Our target was young people in El Salvador. We created the prototype in Figma, then moved to Microsoft Power Apps.
            </p>
            <a href="https://www.figma.com/design/Yagg5b4ogKfXQtX9S02AJc/Health-Future?node-id=889-2&p=f&t=FuzLxxRquxFDy04Q-0" 
            style={{color: '#6528F7'}} className="fw-bold">Check project &rarr;</a>
          </Col>
          
          <Col md={6} className="p-4" style={{height: '400px', backgroundColor: '#555'}}>
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
               <img src={healthFutureImage} alt="H&F" className="img-fluid h-100 w-100 object-fit-contain" />
            </div>
          </Col>
        </Row>

        <Row className="bg-dark text-white align-items-center flex-row-reverse g-0 mb-5">
          <Col md={6} className="p-5">
            <h3 className="header-caption mb-1">PROJECT 2</h3>
            <h2 className="title-main" style={{fontSize: '5vw', lineHeight: '1', fontWeight:'normal'}}>SEVEN</h2>
            
            <p className="mt-4">
              A website designed and developed for salvadoran artists. Our main purpose was to show their talent to the world. 
              In this website, artists can show their creations, and people into art can buy the artworks.
            </p>
            <a href="https://github.com/tomasBONILL/SEVEN" style={{color: '#6528F7'}} className="fw-bold">Check project &rarr;</a>
          </Col>
          
          <Col md={6} className="p-4" style={{height: '400px', backgroundColor: '#555'}}>
            <div className="h-100">
               <img src={sevenImage} alt="SEVEN" className="img-fluid h-100 w-100 object-fit-cover" />
            </div>
          </Col>
        </Row>
        
        <Row className="bg-dark text-white align-items-center g-0 mb-5"> 
          <Col md={6} className="p-5">
            <h3 className="header-caption mb-1">PROJECT 3</h3>
            <h2 className="title-main" style={{fontSize: '5vw', lineHeight: '1', fontWeight:'normal'}}>YumFull</h2>
            
            <p className="mt-4">
              Designed to help salvadoran people to improve their feeding habits.
              We design and develop this web application to contribute sociaty well-being, and personal grow through weekly menues and different challenges. 
            </p>
            <a href="https://www.figma.com/design/gGrk0RZ27rOSAtM25Kz2wH/YumFull?node-id=0-1&t=X9cHD21sD9j9qzXG-1" style={{color: '#6528F7'}} className="fw-bold">Check project &rarr;</a>
          </Col>
          
          <Col md={6} className="p-4" style={{height: '400px', backgroundColor: '#555'}}>
            <div className="h-100">
               <img src={yumFullImage} alt="YumFull" className="img-fluid h-100 w-100 object-fit-cover" />
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Projects;