
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>合同会社ＣｈａｎｇｅＬｅａｐ</h5>
            <p>未来を創造するテクノロジーパートナー</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>サイトマップ</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-white">トップ</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white">企業情報</Nav.Link>
              <Nav.Link as={Link} to="/case-studies" className="text-white">事例紹介</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-3">
            <h5>お問い合わせ</h5>
            <p>Email: hungkk607@gmail.com</p>
            
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <span>&copy; {new Date().getFullYear()} 合同会社ＣｈａｎｇｅＬｅａｐ</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
