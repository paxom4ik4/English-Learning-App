import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { updatePage, updateGrop, getWords } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/actions';
import { removeOffsetX, removeCollection } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/actions';
import { setToInitial } from 'containers/Games/EnglishPuzzle/GameController/actions';
import { setToUserPreferencies } from 'containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/actions';
import wordsData from 'constants/words-constants';
import './index.scss';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const group = useSelector((state: State) => state.engPuzzleGroup.group);
  const page = useSelector((state: State) => state.engPuzzlePage.page);
  const changePageHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updatePage(Number(event.target.value)));
    dispatch(setToUserPreferencies());
    dispatch(removeCollection());
    dispatch(removeOffsetX());
    dispatch(setToInitial());
  };

  const changeGroupHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateGrop(Number(event.target.value)));
    dispatch(setToUserPreferencies());
    dispatch(removeCollection());
    dispatch(removeOffsetX());
    dispatch(setToInitial());
  };

  useEffect(() => {
    dispatch(getWords(page, group - 1, wordsData));
  }, [group, page]);

  const pages = [];
  const maxPage = 60;
  const groups = [1, 2, 3, 4, 5, 6];
  for (let i = 1; i <= maxPage; i += 1) {
    pages.push(i);
  }

  return (
    <div className="english-puzzle-settings">
      <div className="english-puzzle-settings-group">
        <div>Level: </div>
        <select name="group" id="group" value={group} onChange={changeGroupHandler}>
          {groups.map((gr) => (
            <option value={gr} key={gr}>{gr}</option>
          ))}
        </select>
      </div>
      <div className="english-puzzle-settings-page">
        <div>Page: </div>
        <select name="page" id="page" value={page} onChange={changePageHandler}>
          {pages.map((pg) => (
            <option value={pg} key={pg}>{pg}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Settings;
