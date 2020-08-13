import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { eng, ru } from 'constants/main-page-constants';
import { openRegForm, openLogForm } from 'containers/Authorisation/actions';
import './index.scss';

const Authorization: React.FC = () => {
  const dispatch = useDispatch();
  const clickRegHandler = () => dispatch(openRegForm());
  const clickLogHandler = () => dispatch(openLogForm());
  const lang = useSelector((state: State) => state.mainLang.lang);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  useEffect(() => (lang === 'eng' ? setUsedLang(eng) : setUsedLang(ru)), [lang]);
  return (
    <div className="auth-page">
      <div className="auth-app-information">
        <p className="auth-info">
          {usedLang.unregistred}
        </p>
      </div>
      <div className="auth-reg-btns">
        <button
          type="button"
          className="auth-main-but"
          onClick={clickRegHandler}
        >
          {lang === 'eng' ? 'Register' : 'Зарегистрироваться'}
        </button>
        <button
          type="button"
          className="auth-main-but"
          onClick={clickLogHandler}
        >
          {lang === 'eng' ? 'Login' : 'Войти'}
        </button>
      </div>
    </div>
  );
};
export default Authorization;
