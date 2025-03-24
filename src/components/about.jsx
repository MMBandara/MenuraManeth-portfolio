import React from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import bgImage from '../assets/background.jpg';


export default function About() {
    return (
        <div id='about' className='about' style={styles.about}>
            <Container className='about-container' style={styles.container}>
                <Row className='profile-pic align-items-center'>
                    <Col md={6}>
                        <Image src="src\assets\profile.png" alt="profile-pic" fluid roundedCircle style={{height:'25rem'}}  />
                    </Col>
                    <Col md={6} className='details'>
                        <h1>A Computer Science Undergraduate <br /> Student</h1>
                        <p>     I'm Menura Maneth, a Computer Science undergraduate passionate about software development, AI, and web technologies.
                                Skilled in Java, Python, C#, and JavaScript, I love building innovative solutions. Currently, I'm working on Rooted,
                                a hair health app integrating Flutter, FastAPI, and MongoDB. Let's connect and create something amazing! 🚀.</p>
                        <Button variant='primary' className='me-2'>Projects</Button>
                        <Button variant='secondary'>Contact</Button>
                        <Row className='mt-4'>
                            <Col> 
                                <a href="https://github.com/MMBandara" className="text-decoration-none text-reset"><i className="bi bi-github me-3" style={{fontSize:'2rem'}}></i></a>
                                <a href="https://www.facebook.com/share/1Yd2ck5htj/?mibextid=wwXIfr " className="text-decoration-none text-reset"><i className="bi bi-facebook me-3" style={{fontSize:'2rem'}}></i></a>
                                <a href="https://www.instagram.com/menura_bandara?igsh=MWY5bjRmaWZ6cDRxcA%3D%3D&utm_source=qr " className="text-decoration-none text-reset"><i className="bi bi-instagram me-3" style={{fontSize:'2rem'}}></i></a>
                                <a href="https://www.linkedin.com/in/menura-bandara-4ba7b9294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " className="text-decoration-none text-reset"><i className="bi bi-linkedin me-3" style={{fontSize:'2rem'}}></i></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const styles = {
    about: {
        position: 'relative',
        padding: '50px 0',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    container: {
        position: 'relative',
        zIndex: 1,
        padding: '20px',
        borderRadius: '10px',
    },
};