import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { State } from 'models';
import { enableCheckBtn, enableDontKnowBtn } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/HelpButtons/actions';
import { BoardProps, Card } from 'components/Games/EnglishPuzzle/models';
import {
  reorder, move, shuffle, canvasSizes,
} from 'constants/english-puzzle-constants';
import HelpButtons from './HelpButtons';
import Results from './Results';
import Statistic from './Statistic';
import DroppableBoard from './DroppableBoard';
import DroppableBase from './DroppableBase';
import './index.scss';

const GameBoard: React.FC<BoardProps> = ({ gameData, background, description }) => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yOffset = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const xOffset: number[][] = useSelector(
    (state: State) => state.engPuzzleXOffset.xOffsets,
  );
  const cardsCollection: Card[][] = useSelector(
    (state: State) => state.engPuzzleCards.cardsCollection,
  );
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const isSolved = useSelector((state: State) => state.engPuzzleSolved.solved);
  const isResultsOpen = useSelector((state: State) => state.engPuzzleResults.isOpen);
  const isStatOpen = useSelector((state: State) => state.engPuzzleStatistic.statOpen);
  const dispatch = useDispatch();
  const [wordsMap, rowLength, learningWord] = gameData;
  const [isDragPrevented, setDragging] = useState(false);
  const basicStyleCards = new Array(rowLength).fill('eng-puzzle-start-word');
  const [basicStyle, setBasicStyle] = useState(basicStyleCards);
  const [backImg, setBackImg] = useState(background);
  const [state, setState] = useState(wordsMap);

  useEffect(() => {
    const shuffledArr = shuffle(wordsMap.selected);
    setBasicStyle(new Array(rowLength).fill('eng-puzzle-start-word'));
    setBackImg(background);
    setState({
      cards: wordsMap.cards,
      selected: shuffledArr,
    });
  }, [wordsMap]);

  const pushWordsToBoard = () => {
    const solvedState = { ...wordsMap };
    solvedState.selected.forEach((card) => wordsMap.cards.push(card));
    solvedState.selected = [];
    setState(solvedState);
  };

  const replaceOnClick = (e: React.MouseEvent) => {
    if (isDragPrevented) {
      return;
    }
    const target = e.target as HTMLDivElement;
    if (target.parentElement.getAttribute('data-rbd-droppable-id') === 'base') {
      const sourceClone = Array.from(state.selected);
      const destClone = Array.from(state.cards);
      const [replaced] = sourceClone.splice(Number(target.id), 1);
      destClone.push([replaced][0]);
      if (destClone.length === wordsMap.selected.length) {
        dispatch(enableCheckBtn());
      }
      setState({
        cards: destClone,
        selected: sourceClone,
      });
    } else {
      const sourceClone = Array.from(state.selected);
      const destClone = Array.from(state.cards);
      const [replaced] = destClone.splice(Number(target.id), 1);
      sourceClone.push([replaced][0]);
      if (destClone.length !== wordsMap.selected.length) {
        dispatch(enableDontKnowBtn());
      }
      setState({
        cards: destClone,
        selected: sourceClone,
      });
    }
  };

  const idList = {
    board: 'cards',
    base: 'selected',
  };

  const getList = (id:string) => state[idList[id]];
  const onDragStartHandler = () => {
    if (state.cards.length === rowLength) {
      setBasicStyle(basicStyleCards);
      dispatch(enableCheckBtn());
    }
  };
  const onDragEndHandler = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index,
      );
      setState({ ...state, cards: items });
      if (source.droppableId === 'base') {
        setState({ ...state, selected: items });
      }
    } else {
      const results = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination,
      );
      if (results.board.length === wordsMap.selected.length) {
        dispatch(enableCheckBtn());
      } else {
        dispatch(enableDontKnowBtn());
      }
      setState({
        cards: results.board,
        selected: results.base,
      });
    }
  };
  return (
    <DragDropContext
      onDragStart={onDragStartHandler}
      onDragEnd={onDragEndHandler}
    >
      <div
        className={isResultsOpen || isStatOpen ? 'disabled' : 'eng-puzzle-game-board'}
        id="board-1"
      >
        <div className="eng-puzzle-string-numbers">
          {rows.map((number, i) => (
            i === activeIdx ? (
              <div key={`row-${number}`} className="eng-puzzle-string-number eng-puzzle-active-number" />
            ) : (
              <div key={`row-${number}`} className={isSolved ? 'eng-puzzle-string-number eng-puzzle-active-number' : 'eng-puzzle-string-number'} />
            )
          ))}
        </div>
        <div
          className={isSolved ? 'eng-puzzle-canvas' : 'eng-puzzle-canvas eng-puzzle-cover'}
          style={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: `${canvasSizes.width}px ${canvasSizes.height}px`,
          }}
        >
          {rows.map((row, i) => (
            i === activeIdx ? (
              <DroppableBoard
                rowLength={rowLength}
                words={state}
                onClickFn={replaceOnClick}
                key={`row-${row}`}
                cssStyle={basicStyle}
                drag={isDragPrevented}
                back={backImg}
                description={description}
              />
            )
              : (i <= activeIdx - 1 && cardsCollection.length
                ? (
                  <div
                    key={`row-${row}`}
                    className="eng-puzzle-sentence"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${cardsCollection[row - 1].length}, 1fr)`,
                    }}
                  >
                    {cardsCollection.length
                      ? cardsCollection[row - 1].map((card: Card, index) => (
                        <div
                          key={(Math.random() * 100).toFixed(5)}
                          className={isSolved ? 'eng-puzzle-start-word eng-puzzle-hide' : 'eng-puzzle-start-word'}
                          style={{
                            backgroundImage: `url(${backImg})`,
                            backgroundSize: `${canvasSizes.width}px ${canvasSizes.height}px`,
                            backgroundPositionY: `${yOffset[row - 1]}%`,
                            backgroundPositionX: `-${xOffset[row - 1][index]}px`,
                          }}
                        >
                          {card.word}
                        </div>
                      )) : (null)}
                  </div>
                ) : (<div key={`row-${row}`} className="eng-puzzle-sentence" />))
          ))}
        </div>
      </div>
      <DroppableBase
        rowLength={rowLength}
        words={state}
        onClickFn={replaceOnClick}
        cssStyle={basicStyle}
        drag={isDragPrevented}
        back={backImg}
        description={description}
      />
      <HelpButtons
        onClickFn={pushWordsToBoard}
        wordsToApply={wordsMap.selected}
        wordsToCheck={state.cards}
        setCheckedStateToCards={setBasicStyle}
        setDragging={setDragging}
        phrase={wordsMap.selected}
        learningWord={learningWord}
      />
      {isResultsOpen
        && (
        <Results
          back={backImg}
          description={description}
          wordsToApply={wordsMap.selected}
          setCheckedStateToCards={setBasicStyle}
          setDragging={setDragging}
        />
        )}
      <Statistic
        wordsToApply={wordsMap.selected}
        setDragging={setDragging}
        setCheckedStateToCards={setBasicStyle}
      />
    </DragDropContext>
  );
};
export default GameBoard;
