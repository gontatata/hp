
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container className="text-center">
        <span>&copy; {new Date().getFullYear()} 株式会社TechSolution</span>
      </Container>
    </footer>
  );
};

export default Footer;
