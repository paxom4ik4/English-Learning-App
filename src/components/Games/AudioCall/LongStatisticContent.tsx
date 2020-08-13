import * as React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import { State } from 'models';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { LongStatisticState } from 'containers/Games/AudioCall/models';
import { eng, ru } from 'constants/audio-call-constants';

function LongStatisticContent(): JSX.Element {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;

  const isLongStatistic = useSelector(
    (state: State) => state.audioCallStatistic.isLongStatistic,
  );
  const statInfo: LongStatisticState = useSelector(
    (state: State) => state.audioCallLongStatistic,
  );

  if (!isLongStatistic) {
    return null;
  }

  return (
    <div className="long-statistic bg-light mx-5 text-dark">
      <Accordion>
        {statInfo.playedDates.map((info, i) => (
          <Card id="audio-call-statistic-card" key={info.date}>
            <Accordion.Toggle as={Card.Header} eventKey={`${i}`}>
              {info.date}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${i}`}>
              <Card.Body>
                <div className="table-responsive">
                  <table className="eng-puzzle-stat-table">
                    <tbody>
                      <tr>
                        <th>{usedLang.longStatistic.time}</th>
                        <th>{usedLang.longStatistic.level}</th>
                        <th>{usedLang.longStatistic.success}</th>
                        <th>{usedLang.longStatistic.failed}</th>
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
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

export default LongStatisticContent;
