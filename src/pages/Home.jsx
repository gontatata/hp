import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero-section text-white text-center">
      <Container>
        <h1 className="display-3">合同会社ＣｈａｎｇｅＬｅａｐ</h1>
        <p className="lead">
          未来を創造するテクノロジーパートナー
        </p>
        <p>
          <Link to="/case-studies">
            <Button variant="light" size="lg">
              導入事例を見る
            </Button>
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default Home;
