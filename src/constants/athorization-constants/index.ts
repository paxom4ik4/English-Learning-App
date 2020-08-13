import { User } from 'components/Authorization/models';
import {
  addApiError,
  removeApiError,
  setLogged,
  setUserName,
  updateVisits,
  updateUserWordsAmount,
  updateUserStoredSettings,
  updateUserLearnedWordsAmount,
  updateUserStoredStatistic,
  showFormLoader,
  hideFormLoader,
} from 'containers/Authorisation/actions';
import {
  ActionAuth,
  InitialStateSettings,
  ActionUserSettings,
  InitialStateUserStatistic,
  ActionUserStatistic,
} from 'containers/Authorisation/models';
import { showLoader, hideLoader } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Loader/actions';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import { Dispatch, Action } from 'redux';
import { showDictLoader, hideDictLoader } from 'containers/Dictionary/actions';
import { showTrainingLoader, hideTrainingLoader } from 'containers/Training/action';

const regUrl = 'https://afternoon-falls-25894.herokuapp.com/users';
const tokenUrl = 'https://afternoon-falls-25894.herokuapp.com/signin';
const userUrl = (userId: string) => `https://afternoon-falls-25894.herokuapp.com/users/${userId}`;
const statUrl = (userId: string) => `https://afternoon-falls-25894.herokuapp.com/users/${userId}/statistics`;
const settUrl = (userId: string) => `https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`;

export const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const nameErrorMessage = 'Поле Name не должно быть пустым';
export const emailErrorMessage = 'Введите корректный email';
export const passErrorMessage = 'Пароль должен содержать не менее 8 символов, как минимум одну прописную букву, одну заглавную букву, одну цифру и один спецсимвол из +-_@$!%*?&#.,;:[]{}';

export const createUser = (
  user: User,
  dispatch: React.Dispatch<ActionAuth>,
  setRegistred: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  dispatch(showLoader());
  fetch(regUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) {
        setRegistred(true);
        dispatch(hideLoader());
        dispatch(removeApiError());
        return res.json();
      }
      return Promise.reject(res);
    })
    .catch((e) => {
      dispatch(hideLoader());
      switch (e.status) {
        case 417: dispatch(addApiError('user with this e-mail exists'));
          break;
        case 422: dispatch(addApiError('password contains invalid value'));
          break;
        case 404: dispatch(addApiError('Couldnt find a(an) user with current email'));
          break;
        default: dispatch(addApiError('some server error occures'));
      }
    });
};

export const createUserWord = (word: FetchedWordData) => {
  const { token, userId } = localStorage;
  fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${word.id}`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      difficulty: 'easy',
      optional: word.userWord.optional,
    }),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res))
      .catch((e) => window.console.log(e)));
};

export const updateUserWord = (word: FetchedWordData, dispatch: Dispatch<Action>) => {
  const { token, userId } = localStorage;
  dispatch(showDictLoader());
  dispatch(showTrainingLoader());
  fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${word._id || word.id}`, {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      difficulty: 'easy',
      optional: word.userWord.optional,
    }),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then(() => {
      dispatch(hideTrainingLoader());
      dispatch(hideDictLoader());
    })
    .catch((e) => window.console.log(e));
};

export const loginUser = (
  user: User,
  dispatch: React.Dispatch<ActionAuth | ActionUserSettings>,
): void => {
  dispatch(showLoader());
  fetch(tokenUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((res) => {
      dispatch(setUserName(res.name));
      dispatch(updateVisits());
      localStorage.setItem('userName', res.name);
      localStorage.setItem('token', res.token);
      localStorage.setItem('refToken', res.refreshToken);
      localStorage.setItem('userId', res.userId);
      dispatch(setLogged());
      dispatch(hideLoader());
    })
    .catch((e) => {
      dispatch(hideLoader());
      switch (e.status) {
        case 417: dispatch(addApiError('user with this e-mail exists'));
          break;
        case 422: dispatch(addApiError('password contains invalid value'));
          break;
        case 404: dispatch(addApiError('couldnt find a(an) user with current email'));
          break;
        case 403: dispatch(addApiError('password or login incorrect'));
          break;
        default: dispatch(addApiError('some server error occures'));
      }
    });
};

export const getProfileFetch = (
  dispatch: React.Dispatch<ActionAuth>,
// eslint-disable-next-line consistent-return
): Promise<void> => {
  const { refToken, token, userId } = localStorage;
  if (token) {
    dispatch(showLoader());
    return fetch(userUrl(userId), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (res.ok) {
          dispatch(setLogged());
          dispatch(hideLoader());
          return res.json();
        } if (res.status === 401) {
          dispatch(showLoader());
          const resp = await fetch('https://afternoon-falls-25894.herokuapp.com/users/5f05c72b59be47001749a688/tokens', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${refToken}`,
            },
          });
          const tokens = await resp.json();
          dispatch(hideLoader());
          dispatch(removeApiError());
          dispatch(setLogged());
          dispatch(setUserName(tokens.name));
          localStorage.setItem('userName', tokens.name);
          localStorage.setItem('token', tokens.token);
          localStorage.setItem('refToken', tokens.refreshToken);
          localStorage.setItem('userId', tokens.userId);
        }
        return Promise.reject(res);
      })
      .catch(() => {
        dispatch(hideLoader());
        dispatch(addApiError('some server error occures'));
      });
  }
};

export const getUserStatistic = (dispatch: Dispatch<ActionUserStatistic>) => {
  const { token, userId } = localStorage;
  dispatch(showFormLoader());
  fetch(statUrl(userId), {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((res) => {
      dispatch(updateUserLearnedWordsAmount(res.learnedWords));
      dispatch(updateUserStoredStatistic(res.optional));
      dispatch(hideFormLoader());
    })
    .catch(() => {
      updateUserStatistic({
        learnedWords: 0,
        optional: {
          playedGames: 0,
          bestAttempts: 0,
          correctRepeats: 0,
          totalDailyProgress: 0,
        },
      });
      dispatch(hideFormLoader());
    });
};

export const updateUserStatistic = (statistic: InitialStateUserStatistic) => {
  const { token, userId } = localStorage;
  fetch(statUrl(userId), {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(statistic),
  }).catch((e) => window.console.log(e));
};

export const getUserSettings = (dispatch: Dispatch<ActionUserSettings>) => {
  const { token, userId } = localStorage;
  dispatch(showFormLoader());
  fetch(settUrl(userId), {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((res) => {
      dispatch(updateUserWordsAmount(res.wordsPerDay));
      dispatch(updateUserStoredSettings(res.optional));
      dispatch(hideFormLoader());
    })
    .catch(() => {
      createUserSettings({
        wordsPerDay: 20,
        optional: {
          level: 0,
          page: 0,
          cardsPerDay: 60,
          showTranscription: true,
          showImage: true,
          example: true,
          wordMeaning: true,
          autoPronounce: true,
          showTextTranslate: true,
          translate: true,
          showAnswerBtn: true,
          deleteWordBtn: true,
          difficultWordBtn: true,
          repeatBtn: true,
          firstVisit: true,
        },
      });
      dispatch(hideFormLoader());
    });
};

export const createUserSettings = (settings: InitialStateSettings) => {
  const { token, userId } = localStorage;
  fetch(settUrl(userId), {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(settings),
  }).catch((e) => window.console.log(e));
};

export const updateUserSettings = (settings: InitialStateSettings) => {
  const { token, userId } = localStorage;
  fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`, {
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(settings),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .catch((e) => window.console.log(e));
};
