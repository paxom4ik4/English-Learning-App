import * as React from 'react';
import './rawOfWords.scss';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useState, useEffect, Component } from 'react';
import { Simulate } from 'react-dom/test-utils';
// eslint-disable-next-line import/no-named-as-default
import Word from './Word/word';

import {
  setLoadingMode,
  toggleButtonAccess,
  toggleFallingWordActive,
  toggleShowAnswer,
  setEndMode, addFailedWord, addTrueWord, setFallingWordAction,
} from '../../../../../../containers/Games/Savannah/actions';

function getRandomFloat(min, max) {
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return Math.random() * (max - min) + min;
}

const CurrentFallingWord = ({ word, onAnimationEnd, className }) => (
  <div className={className} onAnimationEnd={onAnimationEnd}>
    {word}
  </div>
);

let object; const
  disp = true;

const RawOfWordsComponent1 = () => {
  const [arr, setArr] = useState(
    [
      {
        objName: 'a',
        word: '1',
        answer: true,
        className: 'none',
        translation: '1',
      },
      {
        objName: 'b',
        word: '2',
        answer: false,
        className: 'none',
        translation: '2',
      },
      {
        objName: 'c',
        word: '3',
        answer: false,
        className: 'none',
        translation: '3',
      },
      {
        objName: 'd',
        word: '4',
        answer: false,
        className: 'none',
        translation: '4',
      },
    ],
  );
  const [Answer, setAnswer] = useState('1');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const buttonAccessProperty = useSelector((state) => state.buttonAccessProperty);
  const [translation, setTranslation] = useState('');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const fallingWord = useSelector((state) => state.fallingWord);
  const [className, setClassName] = useState('falling-word animation');
  const [word, setWord] = useState(translation);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const fallingWordActive = useSelector((state) => state.fallingWordActive);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const failedWords = useSelector((state) => state.failedWords);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const trueWords = useSelector((state) => state.trueWords);
  const dispatch = useDispatch();
  const changeWord = () => {
    console.log(Answer);
    dispatch(addFailedWord(`${Answer} - ${translation}`));
    const fallingword = document.querySelector('.falling-word');
    dispatch(toggleButtonAccess());
    dispatch(toggleShowAnswer());
    fallingword.classList.remove('animation');
    fallingword.classList.add('fail');
    const heartArr = document.querySelectorAll('.heart');
    heartArr[0].classList.replace('heart', 'heart-dead');
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    setTimeout(() => { getNewWordss().catch(() => console.log('Error')); }, 1700);
    setTimeout(() => {
      console.log(Answer);

      if (document.querySelectorAll('.heart').length === 0) {
        console.log(failedWords);
        dispatch(setEndMode());
      }
      dispatch(toggleButtonAccess());
      dispatch(toggleShowAnswer());
      fallingword.classList.add('animation');
      fallingword.classList.remove('fail');

      console.log(failedWords);
      setWord(translation);
    }, 2000);
  };

  async function getNewWordss() {
    const page = Math.round(getRandomFloat(0, 29));
    const group = Math.round(getRandomFloat(0, 5));
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    const response = await fetch(url);
    object = await response.json();
    setNewWords();
  }

  const getNewWords = () => {
    const page = Math.round(getRandomFloat(0, 29));
    const group = Math.round(getRandomFloat(0, 5));
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch(url)
      .then((response) => response.json())
      // eslint-disable-next-line no-return-assign
      .then((result) => object = result)
      .then(setNewWords);
  };
  const setNewWords = () => {
    const a = [];
    const currentObj = ['a', 'b', 'c', 'd'];
    const fallingWord1 = /* currentObj[ */Math.round(getRandomFloat(0, 3))/* ] */;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 4; i++) {
      if (fallingWord1 === i) {
        a.push({
          objName: currentObj[i],
          word: object[i].word,
          answer: true,
          className: 'word',
          translation: object[i].wordTranslate,
        });
        setAnswer(object[i].word);
        setTranslation(object[i].wordTranslate);
        setWord(object[i].wordTranslate);
      } else {
        a.push({
          objName: currentObj[i],
          word: object[i].word,
          answer: false,
          className: 'word',
          translation: object[i].wordTranslate,
        });
      }
    }
    setArr(a);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getNewWordss().catch(() => console.log('Error'));
    dispatch(toggleFallingWordActive());
  }, []);

  // eslint-disable-next-line no-shadow
  const clickHandler = (word, e) => {
    if (buttonAccessProperty) {
      const target = e.currentTarget;
      dispatch(toggleShowAnswer());
      // toggleShowAnswer()
      if (Answer === word) {
        console.log(trueWords.trueWords);
        dispatch(toggleButtonAccess());
        // toggleAccess();
        dispatch(toggleFallingWordActive());
        // toggleFallingActive()
        setTimeout(() => {
          dispatch(toggleFallingWordActive());
          // toggleFallingActive()
          dispatch(toggleButtonAccess());
          // toggleAccess()
          dispatch(addTrueWord(`${Answer} - ${translation}`));
        }, 2000);
      } else {
        dispatch(toggleButtonAccess());
        // toggleAccess();
        dispatch(toggleFallingWordActive());
        // toggleFallingActive();
        const heartArr = document.querySelectorAll('.heart');
        heartArr[0].classList.replace('heart', 'heart-dead');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        target.classList.add('word__wrong');
        setTimeout(() => {
          dispatch(toggleFallingWordActive());
          // toggleFallingActive();
          dispatch(toggleButtonAccess());
          // toggleAccess();
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          target.classList.remove('word__wrong');
          dispatch(addFailedWord(`${Answer} - ${translation}`));
        }, 2000);
      }
      // set new Answer and new words
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      setTimeout(() => { getNewWordss().catch(() => console.log('Error')); }, 1800);
      setTimeout(() => {
        if (document.querySelectorAll('.heart').length === 0) {
          dispatch(setEndMode());
          // endGame();
        }
        dispatch(toggleShowAnswer());
        // toggleShowAnswer()
      }, 2000);
    }
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const showAnswer = useSelector((state) => state.showAnswer);
  return (
    <>
      <CurrentFallingWord
        className={fallingWordActive ? 'falling-word animation' : 'falling-word animation-stop'}
        word={word}
        onAnimationEnd={changeWord}
      />
      <div className="raw-wrapper">
        <Word
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          word={arr[0].word}
          onClick={clickHandler}
          className={arr[0].answer && showAnswer ? 'word word__true' : arr[0].className}
        />
        <Word
          word={arr[1].word}
          onClick={clickHandler}
          className={arr[1].answer && showAnswer ? 'word word__true' : arr[1].className}
        />
        <Word
          word={arr[2].word}
          onClick={clickHandler}
          className={arr[2].answer && showAnswer ? 'word word__true' : arr[2].className}
        />
        <Word
          word={arr[3].word}
          onClick={clickHandler}
          className={arr[3].answer && showAnswer ? 'word word__true' : arr[3].className}
        />
      </div>
    </>
  );
};

/*
class RawOfWordsComponent extends Component {
  state = {
    arr: [
      {
        objName: 'a',
        word: '1',
        answer: true,
        className: 'word',
        translation: '1',
      },
      {
        objName: 'b',
        word: '2',
        answer: false,
        className: 'word',
        translation: '2',
      },
      {
        objName: 'c',
        word: '3',
        answer: false,
        className: 'word',
        translation: '3',
      },
      {
        objName: 'd',
        word: '4',
        answer: false,
        className: 'word',
        translation: '4',
      }
    ],
    word1: '1',
    word2: '2',
    word3: '3',
    word4: '4',
    Answer: '1',
    clicked: false,
    showAnswer: false,
  };

  getNewWords = () => {
    let page = Math.round(getRandomFloat(0, 29));
    let group = Math.round(getRandomFloat(0, 5));
    let url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    fetch(url)
      .then((response) => response.json())
      .then(result => object = result)
      .then(this.setNewWords)
  };

  setNewWords = () => {
    this.setState({
      arr: [
        {
          objName: 'a',
          word: object[0].word,
          answer: true,
          className: 'word',
          translation: object[0].wordTranslate,
        },
        {
          objName: 'b',
          word: object[1].word,
          answer: false,
          className: 'word',
          translation: object[1].wordTranslate,
        },
        {
          objName: 'c',
          word: object[2].word,
          answer: false,
          className: 'word',
          translation: object[2].wordTranslate,
        },
        {
          objName: 'd',
          word: object[3].word,
          answer: false,
          className: 'word',
          translation: object[3].wordTranslate,
        }
      ],
    })
    const {arr, clicked} = this.state;
    let currentObj = ['a', 'b', 'c', 'd'];
    let fallingWord = currentObj[Math.round(getRandomFloat(0, 3))];
    console.log(arr);
    arr.forEach(key => {
      if (key.objName === fallingWord) {
        key.answer = true;
        this.setState({
          Answer: key.word,
        })
      } else {
        key.answer = false;
      }
    })
  };

  componentDidMount(): void {
    this.getNewWords();
  }

  clickHandler = (word, e) => {
    // @ts-ignore
    const {buttonAccessProperty, toggleAccess, toggleFallingActive, toggleShowAnswer, showAnswer, endGame} = this.props;
    if (buttonAccessProperty) {
      const {Answer} = this.state;
      let target = e.currentTarget;
      toggleShowAnswer()
      if (Answer === word) {
        toggleAccess();
        toggleFallingActive()
        setTimeout(() => {
          toggleFallingActive()
          toggleAccess()
        }, 2000)
      } else {
        toggleAccess();
        toggleFallingActive();
        let heartArr = document.querySelectorAll('.heart');
        heartArr[0].classList.replace('heart', 'heart-dead');
        target.classList.add('word__wrong');
        setTimeout(() => {
          toggleFallingActive();
          toggleAccess();
          target.classList.remove('word__wrong');
        }, 2000)
      }
      //set new Answer and new words
      setTimeout(() => {
        if (document.querySelectorAll('.heart').length === 0) {
          endGame();
        }
          toggleShowAnswer()
        this.getNewWords();
      }, 1700)
    }
  }

  // eslint-disable-next-line max-len,@typescript-eslint/ban-types
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const {word1, word2, word3, word4, a, b, c, d, arr} = this.state;
    const {showAnswer} = this.props
    return (
      <div className="raw-wrapper">
        <Word word={arr[0].word} id='1' onClick={this.clickHandler}
              className={arr[0].answer && showAnswer ? 'word word__true' : 'word'}/>
        <Word word={arr[1].word} id='2' onClick={this.clickHandler}
              className={arr[1].answer && showAnswer ? 'word word__true' : 'word'}/>
        <Word word={arr[2].word} id='3' onClick={this.clickHandler}
              className={arr[2].answer && showAnswer ? 'word word__true' : 'word'}/>
        <Word word={arr[3].word} id='4' onClick={this.clickHandler}
              className={arr[3].answer && showAnswer ? 'word word__true' : 'word'}/>
      </div>
    );
  }
}

const mapDispatchToPropsForButton = (dispatch) => ({
  toggleAccess: () => {
    toggleButtonAccess(dispatch);
  },
  toggleFallingActive: () => {
    toggleFallingWordActive(dispatch);
  },
  toggleShowAnswer: () => {
    toggleShowAnswer(dispatch);
  },
  endGame: () => {
    setEndMode(dispatch);
  },
  setWord: setFallingWord,
});

const mapStateToPropsForCounter = (state) => ({
  buttonAccessProperty: state.buttonAccessProperty,
  fallingWordActive: state.fallingWordActive,
  showAnswer: state.showAnswer,
});

const RawOfWords = connect(mapStateToPropsForCounter, mapDispatchToPropsForButton)(RawOfWordsComponent)
*/

export default RawOfWordsComponent1;
