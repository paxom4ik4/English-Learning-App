import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import '../index.scss';
import { Draggable } from 'react-beautiful-dnd';
import { WordProps } from 'components/Games/EnglishPuzzle/models';
import { canvasSizes } from 'constants/english-puzzle-constants';

const Word: React.FC<WordProps> = ({
  word, cId, idx, id, onClickFn, cssStyle, drag, back, offsetX,
}) => {
  const yOffset = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const backBtnState = useSelector((state: State) => state.engPuzzleBtns.backgroundHintActive);
  const [defaultStyle, setDefaultStyle] = backBtnState
    ? useState(cssStyle)
    : useState(`${cssStyle} eng-puzzle-cover`);
  const setWordStyle = (draggableStyle) => ({
    backgroundImage: `url(${back})`,
    backgroundSize: `${canvasSizes.width}px ${canvasSizes.height}px`,
    backgroundPositionY: `${yOffset[activeIdx]}%`,
    backgroundPositionX: `-${offsetX}px`,
    ...draggableStyle,
  });

  useEffect(() => {
    if (backBtnState) {
      setDefaultStyle(cssStyle);
    } else {
      setDefaultStyle(`${cssStyle} eng-puzzle-cover`);
    }
  }, [backBtnState, cssStyle]);

  return (
    <Draggable
      draggableId={cId.toString()}
      index={idx}
      isDragDisabled={drag}
    >
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <div
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
          className={defaultStyle}
          id={`${id}`}
          onClick={onClickFn}
          style={setWordStyle(
            draggableProps.style,
          )}
        >
          {word}
        </div>
      )}
    </Draggable>
  );
};
export default Word;
