
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="mt-5 text-center">
      <h1>株式会社TechSolution</h1>
      <p className="lead">未来を創造するテクノロジーパートナー</p>
      <p>私たちは、革新的なテクノロジーと豊富な経験を活かし、お客様のビジネスを成功に導くための最適なシステムソリューションを提供します。</p>
      <Link to="/about">
        <Button variant="primary" className="me-2">企業情報へ</Button>
      </Link>
      <Link to="/case-studies">
        <Button variant="secondary">事例紹介へ</Button>
      </Link>
    </Container>
  );
};

export default Home;
