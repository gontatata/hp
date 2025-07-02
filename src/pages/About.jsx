
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <h2>企業情報</h2>
      <Row className="mt-4">
        <Col md={12}>
          <h4>会社概要</h4>
          <p><strong>会社名:</strong> 株式会社TechSolution</p>
          <p><strong>設立:</strong> 2010年4月1日</p>
          <p><strong>代表者:</strong> 代表取締役 山田 太郎</p>
          <p><strong>所在地:</strong> 東京都千代田区丸の内1-2-3</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <h4>事業内容</h4>
          <ul>
            <li>カスタムソフトウェア開発</li>
            <li>Webアプリケーション開発</li>
            <li>モバイルアプリケーション開発</li>
            <li>ITコンサルティング</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
