import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="text-center text-md-start">
          {/* Left Column - About */}
          <Col md={4}>
            <h5>About me</h5>
            <p></p>
          </Col>

          {/* Center Column - Links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Right Column - Social Media */}
          <Col md={4} className="text-md-end">
            <h5>Follow on</h5>
            <a href="https://facebook.com" className="text-light me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-light me-3">
              <i className="bi bi-x"></i>
            </a>
            <a href="https://linkedin.com" className="text-light">
              <i className="bi bi-linkedin"></i>
            </a>
          </Col>
        </Row>

        <hr className="my-3 border-light" />

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Menura Maneth. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
