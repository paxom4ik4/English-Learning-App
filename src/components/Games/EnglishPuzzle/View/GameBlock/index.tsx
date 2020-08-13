import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { wordsExtractor } from 'constants/english-puzzle-constants';
import paintings1 from 'constants/english-puzzle-constants/images-imports/level1/levelData/level1';
import paintings2 from 'constants/english-puzzle-constants/images-imports/level2/levelData/level2';
import paintings3 from 'constants/english-puzzle-constants/images-imports/level3/levelData/level3';
import paintings4 from 'constants/english-puzzle-constants/images-imports/level4/levelData/level4';
import paintings5 from 'constants/english-puzzle-constants/images-imports/level5/levelData/level5';
import paintings6 from 'constants/english-puzzle-constants/images-imports/level6/LevelData/level6';
import { levelOneDatabase } from 'constants/english-puzzle-constants/images-imports/level1/ImagesImports1';
import { levelTwoDatabase } from 'constants/english-puzzle-constants/images-imports/level2/imagesImports2';
import { levelThreeDatabase } from 'constants/english-puzzle-constants/images-imports/level3/imagesImports3';
import { levelFourDatabase } from 'constants/english-puzzle-constants/images-imports/level4/imagesImports4';
import { levelFiveDatabase } from 'constants/english-puzzle-constants/images-imports/level5/imagesImports5';
import { levelSixDatabase } from 'constants/english-puzzle-constants/images-imports/level6/imagesImports6';
import GameBoard from './GameBoard';
import HintsBlock from './HintsBlock';
import './index.scss';

const GameBlock: React.FC = () => {
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const actualWordsCollection = useSelector(
    (state: State) => state.engPuzzleFetchedWords.currentWords,
  );
  const page: number = useSelector((state: State) => state.engPuzzlePage.page);
  const group: number = useSelector((state: State) => state.engPuzzleGroup.group);
  const painitings = [
    paintings1,
    paintings2,
    paintings3,
    paintings4,
    paintings5,
    paintings6,
  ];
  const imports = [
    levelOneDatabase,
    levelTwoDatabase,
    levelThreeDatabase,
    levelFourDatabase,
    levelFiveDatabase,
    levelSixDatabase,
  ];
  const {
    id, name, author, year,
  } = painitings[group - 1][page - 1];
  const playedBackground = imports[group - 1][id];
  const description = `${name} - ${author} - ${year}`;
  return (
    <div className="english-puzzle-game-block">
      <HintsBlock />
      {actualWordsCollection.length && (
        <GameBoard
          gameData={wordsExtractor(actualWordsCollection, activeIdx)}
          background={playedBackground}
          description={description}
        />
      )}
    </div>
  );
};
export default GameBlock;
