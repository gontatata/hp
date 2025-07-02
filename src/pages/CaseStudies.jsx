
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const caseStudies = [
  {
    title: '大手製造業向け生産管理システム',
    description: '製造ラインの効率を30%向上させる生産管理システムを開発しました。リアルタイムでの進捗管理と品質管理を実現し、コスト削減に貢献しました。'
  },
  {
    title: 'ECサイト構築',
    description: '最新のWeb技術を駆使し、ユーザーフレンドリーなUI/UXを実現したECサイトを構築。売上が前年比200%を達成しました。'
  },
  {
    title: '不動産会社向け顧客管理システム',
    description: '顧客情報と物件情報を一元管理し、営業活動の効率化を支援するシステムを開発。成約率の向上に繋がりました。'
  }
];

const CaseStudies = () => {
  return (
    <Container className="mt-5">
      <h2>事例紹介</h2>
      <Row className="mt-4">
        {caseStudies.map((study, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{study.title}</Card.Title>
                <Card.Text>{study.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CaseStudies;
