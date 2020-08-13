import { Json, WordsFromAPI, WordInfo } from 'containers/Games/AudioCall/models';
import urlError from 'assets/error.mp3';
import urlCorrect from 'assets/correct.mp3';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';

async function getWordsForGame(level: number, round: number): Promise<Array<Json>> {
  try {
    const group = level - 1;
    const page = round === 1 ? 0 : Math.ceil(round / 2) - 1;
    const response = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
    const json = await response.json();
    return json;
  } catch (err) {
    throw new Error('Cannot fetch words');
  }
}

async function getTranslates(
  wordsData: Array<Json | FetchedWordData>, word: string, wordTranslate: string,
): Promise<Array<string>> {
  const translates = [];
  const similarTranslates = [];
  const defaultTranslates = [];
  wordsData.map((wordData) => {
    if (wordData.wordTranslate !== wordTranslate) {
      defaultTranslates.push(wordData.wordTranslate);
    }
    return defaultTranslates;
  });
  shuffleArray(defaultTranslates);

  try {
    const rawResponse = await fetch(`https://dictionary.skyeng.ru/api/public/v1/words/search?search=${word}`);
    const content: Array<WordsFromAPI> = await rawResponse.json();
    const targetWord = content.filter((wordContent) => wordContent.text === word);
    const wordId = targetWord[0].id;
    const meaningsResponse = await fetch(`https://dictionary.skyeng.ru/api/public/v1/meanings?ids=${wordId}`);
    const meanings: Array<WordInfo> = await meaningsResponse.json();

    if (meanings.length > 0) {
      meanings[0].meaningsWithSimilarTranslation.map(
        (meaning: WordInfo) => translates.push(meaning.translation.text),
      );
      meanings[0].alternativeTranslations.map(
        (meaning: WordInfo) => translates.push(meaning.translation.text),
      );

      translates.map((translate: string) => {
        if (
          translate.slice(0, 2) === wordTranslate.slice(0, 2)
          && translate.length < wordTranslate.length + 5
          && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (
          translate.length === wordTranslate.length
          && translate[0] === wordTranslate[0]
          && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (
          translate.slice(-4) === wordTranslate.slice(-4)
          && translate.length < wordTranslate.length + 5
          && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (
          translate.slice(-3) === wordTranslate.slice(-3)
          && translate.length < wordTranslate.length + 5
          && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (
          translate[0] === wordTranslate[0]
          && translate.length < wordTranslate.length + 5
          && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (
          translate.length === wordTranslate.length
          && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (
          translate.length === wordTranslate.length + 1
          && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      if (similarTranslates.length < 4) {
        translates.map((translate: string) => {
          if (
            !similarTranslates.includes(translate)
            && translate.length < wordTranslate.length + 5) similarTranslates.push(translate);
          return similarTranslates;
        });
      }
      if (similarTranslates.length < 4) {
        const newTranslates = similarTranslates.concat(defaultTranslates);
        return newTranslates.slice(0, 4);
      }
      return similarTranslates.slice(0, 4);
    }
    return defaultTranslates.slice(0, 4);
  } catch (err) {
    return defaultTranslates.slice(0, 4);
  }
}

async function playSound(sound: string): Promise<void> {
  const url = sound === 'error' ? urlError : urlCorrect;
  const audio = new Audio(url);
  await audio.play();
}

function addTranslateOptions(dataObj, optionsArr) {
  const gameData = dataObj;
  for (let i = 0; i < gameData.length; i += 1) {
    const targetTranslation = dataObj[i].wordTranslate;
    const options: Array<string> = optionsArr[i];
    options.push(targetTranslation);
    const shuffledOptions = shuffleArray(options);
    gameData[i].translateOptions = shuffledOptions;
  }
  return gameData;
}

async function getTranslateOptions(dataObj: Array<Json | FetchedWordData>): Promise<Array<Json | FetchedWordData>> {
  const gameData = dataObj;
  const allOptions = [];
  for (let i = 0; i < gameData.length; i += 1) {
    const targetWord = dataObj[i].word;
    const targetTranslation = dataObj[i].wordTranslate;
    const options = getTranslates(gameData, targetWord, targetTranslation);
    allOptions.push(options);
  }
  const dataWithOptions = addTranslateOptions(gameData, await Promise.all(allOptions));
  return dataWithOptions;
}

function shuffleArray(arr: Array<string> | Array<Json> | FetchedWordData[]): Array<string> | Array<Json> | FetchedWordData[] {
  const newArr = arr;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export {
  getWordsForGame, Json, playSound, getTranslateOptions, getTranslates, shuffleArray,
};
