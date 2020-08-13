import * as React from 'react';
import { useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { State } from 'models';
import { InitialStateStatisticInfo } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Statistic/models';
import { StatisticProps } from 'components/Games/EnglishPuzzle/models';
import ContinueBtn from '../HelpButtons/ContinueBut';
import './index.scss';

const Statistic: React.FC<StatisticProps> = ({
  wordsToApply, setDragging, setCheckedStateToCards,
}) => {
  const isStatOpen = useSelector((state: State) => state.engPuzzleStatistic.statOpen);
  const statInfo: InitialStateStatisticInfo = useSelector(
    (state: State) => state.engPuzzleStatisticInfo,
  );
  return (
    <div className={isStatOpen ? 'eng-puzzle-statistic-wrapper' : 'disabled'}>
      <div className="eng-puzzle-statistic">
        <div className="eng-puzzle-statistic-content">
          <Accordion>
            {statInfo.playedDates.map((info, i) => (
              <Card key={info.date} className="eng-puzzle-statistic-card">
                <Accordion.Toggle as={Card.Header} eventKey={`${i}`}>
                  {info.date}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`${i}`}>
                  <Card.Body className="eng-puzzle-statistic-card-body">
                    <table className="eng-puzzle-stat-table">
                      <tbody>
                        <tr>
                          <th>Time:</th>
                          <th>Level:</th>
                          <th>Success:</th>
                          <th>Failed:</th>
                        </tr>
                        {statInfo.playedTimes.map((stat, idx) => (
                          stat.date === statInfo.playedDates[i].date && (
                            <tr key={stat.payload}>
                              <td>{statInfo.playedTimes[idx].payload}</td>
                              <td>{statInfo.playedLevels[idx].payload}</td>
                              <td>{statInfo.success[idx].payload}</td>
                              <td>{statInfo.failed[idx].payload}</td>
                            </tr>
                          )
                        ))}
                      </tbody>
                    </table>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </div>
        <div className="eng-puzzle-statistic-footer">
          <ContinueBtn
            wordsToApply={wordsToApply}
            setDragging={setDragging}
            setCheckedStateToCards={setCheckedStateToCards}
          />
        </div>
      </div>
    </div>
  );
};
export default Statistic;
