import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { Droppable } from 'react-beautiful-dnd';
import { DroppableProps } from 'components/Games/EnglishPuzzle/models';
import Word from '../DroppableBase/DraggableWords/Word';

const DroppableBase: React.FC<DroppableProps> = ({
  rowLength, words, onClickFn, cssStyle, drag, back,
}) => {
  const isSolved = useSelector((state: State) => state.engPuzzleSolved.solved);
  return (
    <Droppable droppableId="board" direction="horizontal">
      {({ innerRef, droppableProps, placeholder }) => (
        <div
          className={isSolved ? 'disabled' : 'eng-puzzle-sentence eng-puzzle-active-sentence'}
          style={{ display: 'grid', gridTemplateColumns: `repeat(${rowLength}, 1fr)` }}
          ref={innerRef}
          {...droppableProps}
        >
          {words.cards.map((card, idx:number) => (
            <Word
              key={`${card.word}-${card.cId}`}
              cId={card.cId}
              word={card.word}
              idx={idx}
              id={idx}
              onClickFn={onClickFn}
              cssStyle={cssStyle[idx]}
              drag={drag}
              back={back}
              offsetX={card.xOffset}
            />
          ))}
          {placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default DroppableBase;
