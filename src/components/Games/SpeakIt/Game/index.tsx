import * as React from 'react';
import './index.scss';
import {
  Container, Col, Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { State } from 'models';
import LevelControl from '../Level-control';
import ShowImage from '../ShowImage';
import Cards from '../Cards';
import Control from '../Control';
import Result from '../Result';

const Game = (): JSX.Element => {
  const result = useSelector((state: State) => state.speakItButtons.result);
  return (
    <div className="speakit-app">
      <Container>
        <Row>
          <Col>
            <LevelControl />
          </Col>
        </Row>
        <Row>
          <Col>
            <ShowImage />
          </Col>
        </Row>
        <Row>
          <Col>
            <Cards />
          </Col>
        </Row>
        <Row>
          <Col>
            <Control />
          </Col>
        </Row>
        {result ? <Result /> : ''}
      </Container>
    </div>

  );
};

export default Game;
