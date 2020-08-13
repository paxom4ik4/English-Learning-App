import * as React from 'react';
import './index.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface Props {
  cardInfo
}

const DevCard: React.FC<Props> = ({ cardInfo }) => (
  <Card className="dev-card">
    <Card.Img variant="top" src={cardInfo.imagePath} />
    <Card.Body>
      <Card.Title>{cardInfo.name}</Card.Title>
      <Card.Text>{cardInfo.text}</Card.Text>
      <Button variant="light" href={cardInfo.linkToGit}>Git</Button>
    </Card.Body>
  </Card>
);

export default DevCard;
