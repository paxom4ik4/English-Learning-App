import * as React from 'react';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';
import './index.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords } from 'containers/Games/SpeakIt/FetchGroup/actions';
import { State } from 'models';
import Game from './Game';

const SpeakIt = () : JSX.Element => {
  const dispatch = useDispatch();
  const group = useSelector((state: State) => state.speakItControl.group);
  const [game, setGame] = useState(false);

  useEffect(() => {
    dispatch(fetchWords(group));
  }, [group]);

  return (
    <div>
      {game
        ? (
          <Game />
        )
        : (
          <Container className="text-center intro" fluid>
            <Row style={{ position: 'relative', top: '30%', background: 'none' }}>
              <Col className="intro-container">
                <h2 className="title">SPEAKIT</h2>
                <p className="intro-text">
                  Click on the words to hear them sound.
                  <br />
                  Click on the button and speak the words into the microphone.
                </p>
                <Button
                  variant="dark"
                  className="intro-btn"
                  onClick={() => setGame(true)}
                >
                  Start
                </Button>
              </Col>
            </Row>

          </Container>
        )}
    </div>
  );
};

export default SpeakIt;
