import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { 
  FaPython, FaFileExcel, FaChartBar, 
  FaPaintBrush, FaFigma, FaPenFancy
} from 'react-icons/fa'; 

function Skills() {
  const technicalSkills = [
    { 
      name: "Python", 
      description: "Data analysis and automation with scripting.", 
      icon: <FaPython size={30} color="white" /> 
    },
    { 
      name: "Excel", 
      description: "Advanced data management and analysis.", 
      icon: <FaFileExcel size={30} color="white" /> 
    },
    { 
      name: "Power BI", 
      description: "Interactive data visualization and business intelligence.", 
      icon: <FaChartBar size={30} color="white" /> 
    },
    { 
      name: "Canva", 
      description: "Graphic design for marketing and presentations.", 
      icon: <FaPaintBrush size={30} color="white" /> 
    },
    { 
      name: "Figma", 
      description: "UI/UX design and collaborative prototyping.", 
      icon: <FaFigma size={30} color="white" /> 
    },
    { 
      name: "Lettering", 
      description: "Custom typography and creative calligraphy.", 
      icon: <FaPenFancy size={30} color="white" />
    },
  ];

  return (
    <section className="bg-white text-dark section-padding">
      <Container>

        <Row className="align-items-start">
          
          
          <Col md={6} className="p-4">
            <p className="header-caption">FUTURE GRAPHIC DESIGNER | CESIA PINEDA</p>
            <h2 style={{fontSize: '3rem', fontWeight: 'normal', fontFamily: 'Vina Sans'}}>STRENGTHS & SKILLS*</h2>
            
            <div className="mt-4">
                <div className="mb-4">
                    <h4 className="fw-bold">Creativity:</h4>
                    <p className="text-secondary">Loving colorful creations, great ability to combine colors, impactful ideas and quick solutions.</p>
                </div>
                <div className="mb-4"> 
                    <h4 className="fw-bold">Purposeful:</h4>
                    <p className="text-secondary">Once I've made a creative decision, I don't back down. I'm perfectly capable of completing my projects once I've started them, and of solving problems with the tools I have.</p>
                </div>
                <div className="mb-4"> 
                    <h4 className="fw-bold">Bilingual:</h4>
                    <p className="text-secondary">Languages ​​open doors to many opportunities; beyond communication, with a second language I can learn from experts in the areas of my interest, and in design it is fundamental.</p>
                </div>
            </div>
          </Col>

          <Col md={6} className="text-center p-4 position-relative">
            <div style={{
                height: 'auto', 
                backgroundColor: 'transparent', 
                zIndex: 10,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: '15px',
                marginTop: '20px' 
            }}>
                {technicalSkills.map((skill, index) => (
                  <div key={index} style={{
                    backgroundColor: '#313647',
                    padding: '20px',
                    borderRadius: '10px', 
                    width: 'calc(50% - 15px)', 
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minHeight: '120px',
                    color: 'white' 
                  }}>
                    {skill.icon} 
                    <h5 className="mt-2 mb-1" style={{
                      fontWeight: 'bold', 
                      fontSize: '1.1rem', 
                      fontFamily: 'Poppins'
                    }}>{skill.name}</h5>
                    <p style={{ 
                      fontSize: '0.85rem',
                      fontFamily: 'Poppins'
                    }}>{skill.description}</p>
                  </div>
                ))}
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}

export default Skills;