import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFilePdf} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import './App.css';


import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import heroBackground from './images/iconicme.png';


const HomeLanding = () => (
    <section id="home-section" className="home-landing-section text-center">

        <Container>
            <div className="landing-wrapper">

                <p className="welcome-text">
                    *Welcome to Cesia's
                </p>

                <h1 className="portfolio-title">
                    <TypeAnimation
                      sequence={[ 
                        'PORTFOLIO', 
                        1000,        
                     ]} 
                     wrapper="span" 
                     cursor={false} 
                     repeat={0}     
                     speed={50} 
                    />
                </h1>

                <div className="social-links-container">
                    <a href="https://github.com/Cesia-PMartinez/Portfolio2025" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub size={30} />
                    </a>
                    

                    <a href="https://www.linkedin.com/in/cesia-pineda-290538368/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin size={30} />
                    </a>

                    <a 
                      href="/cesiaresume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-icon"
                      download="cesiaresume.pdf"
                    >
                    <FaFilePdf size={30} />
                    </a>

                </div>


                <div className="hero-image-container">
                    <img 
                        src={heroBackground} 
                        alt="iconicme" 
                        className="hero-model-image" 
                    />
                </div>

            </div>
        </Container>
    </section>
);




function App() {
  return (
    <>
      <NavBar /> 
      
      <HomeLanding />
      
      <div id="about-section">
          <About /> 
      </div>
      
      <div id="skills-section">
          <Skills />
      </div>
      
      <div id="projects-section">
          <Projects />
      </div>
      
      <Footer /> 
    </>
  );
}

export default App;