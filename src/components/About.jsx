import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileImage from '../images/colorpalette.png';

function About() {
  return (
    <section className="bg-dark text-white section-padding">
      <Container>
        <Row className="align-items-center">
          
          <Col md={6} className="p-4">
            <p className="header-caption">FUTURE GRAPHIC DESIGNER | CESIA PINEDA</p>
            <h2 style={{fontSize: '5rem', fontWeight: 'normal', fontFamily:'Vina Sans'}}>ABOUT ME *</h2>
            
            <p className="mt-4">
              I absolutely love art and design! Ever since I was a child, I was certain that my destiny was to create things. I absolutely love illustrating, drawing, painting and creating stories through these disciplines, which until now have been just my favourite hobbies.
              I can't wait to dive into the challenges of graphic design and let my creativity soar! I'm excited to innovate with my ideas and make something truly unique. 
              I have previously worked on website prototyping and have been a contributor to web development teams at school, so I am familiar with the subject. 
              I thrive on the challenges that working in this area can bring, and I am confident in my ability to provide effective solutions.
            </p>

            <h3 className="edu-exp" style={{borderBottom: '2px solid #A076F9'}}>
                EDUCATION & EXPERIENCE
            </h3>
            
            <div className="mb-3">
                <h5 className="fw-bold">English, ICT and Values Training</h5>
                <p className="text-secondary mb-1">Programa Empresarial ¡Supérate! (2023-2025)</p>
            </div>
            
            <div className="mb-3">
                <h5 className="fw-bold">Bachillerato General</h5>
                <p className="text-secondary mb-1">Complejo Educativo René Toruño Steiner (2024 - 2025)</p>
            </div>

            <div className="mb-3">
                <h5 className="fw-bold">Student Volunteering</h5>
                <p className="text-secondary mb-1">Glasswing International (2025)</p>
            </div>

            <div className="mb-3">
                <h5 className="fw-bold">Leadership, Negociation and Diplomacy</h5>
                <p className="text-secondary mb-1">ESEN, MUN-ESEN (2024)</p>
            </div>

          </Col>

          <Col md={6} className="p-4 text-center">
              <img 
                  src={ProfileImage} 
                  alt="colorpalette" 
                  className="img-fluid rounded-3"
                  style={{ maxHeight: '600px', objectFit: 'cover' }}
              />
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}

export default About;