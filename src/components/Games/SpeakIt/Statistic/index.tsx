import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { State } from 'models';
import { InitialStateStatisticInfo } from 'containers/Games/SpeakIt/LongTermStatistic/models';
import './index.scss';
import { closeStatistic } from 'containers/Games/SpeakIt/LongTermStatistic/actions';

const Statistic = () => {
  const dispatch = useDispatch();
  const isStatOpen = useSelector((state: State) => state.speakItStatistic.statOpen);
  const statInfo: InitialStateStatisticInfo = useSelector(
    (state: State) => state.speakItStatisticInfo,
  );

  const close = () => {
    dispatch(closeStatistic());
  };

  return (
    <div className={isStatOpen ? 'speakit-statistic-wrapper' : 'disabled'}>
      <div className="speakit-statistic">
        <div className="speakit-statistic-content">
          {statInfo.playedDates.length > 0
            ? (
              <Accordion>
                {statInfo.playedDates.map((info, i) => (
                  <Card key={info.date}>
                    <Accordion.Toggle as={Card.Header} eventKey={`${i}`}>
                      {info.date}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${i}`}>
                      <Card.Body>
                        <table className="speakit-stat-table">
                          <tbody>
                            <tr>
                              <th>Time:</th>
                              <th>Level:</th>
                              <th>Success:</th>
                              <th>Failed:</th>
                            </tr>
                            {statInfo.playedTimes.map((stat, idx) => (
                              stat.date === statInfo.playedDates[i].date ? (
                                <tr key={stat.payload}>
                                  <td>{statInfo.playedTimes[idx].payload}</td>
                                  <td>{statInfo.playedLevels[idx].payload}</td>
                                  <td>{statInfo.success[idx].payload}</td>
                                  <td>{statInfo.failed[idx].payload}</td>
                                </tr>
                              ) : (null)
                            ))}
                          </tbody>
                        </table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            ) : 'У Вас нету сыграных игр!' }
        </div>
        <div className="speakit-statistic-footer">
          <Button variant="success" className="btn" onClick={close}>Close</Button>
        </div>
      </div>
    </div>
  );
};
export default Statistic;
