
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid className="mt-5 p-5">
      <h2 className="text-center mb-4">企業情報</h2>
      <Row className="justify-content-center">
        <Col md={8} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title as="h4" className="text-center">会社概要</Card.Title>
              <hr />
              <p><strong>企業名:</strong> 合同会社ＣｈａｎｇｅＬｅａｐ (チェンジリープ)</p>
              <p><strong>設立:</strong> 2023年11月</p>
              <p><strong>所在地:</strong> 千葉県市川市新井１丁目１９番地３２－３１０号（グラン・シャトー）</p>
              <p><strong>法人番号:</strong> 1040003023712</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
