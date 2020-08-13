import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  passRegex,
  emailRegex,
  nameErrorMessage,
  emailErrorMessage,
  passErrorMessage,
  createUser,
} from 'constants/athorization-constants';
import { State } from 'models';
import { removeApiError, closeRegForm, openLogForm } from 'containers/Authorisation/actions';
import { getStartWords } from 'containers/TrainingCard/actions';
import { User } from '../models';
import Loader from '../Loader';
import '../index.scss';

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const loading = useSelector((state: State) => state.engPuzzleLoading.isLoading);
  const apiError = useSelector((state: State) => state.authErrors.error);
  const [registred, setRegistred] = useState(false);
  const [type, setType] = useState('password');
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(removeApiError());
    dispatch(closeRegForm());
  };
  const changeHandler = () => dispatch(removeApiError());
  const onSubmit = (user: User) => {
    createUser(user, dispatch, setRegistred);
    localStorage.removeItem('refToken');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
  };
  const inputTypeHandler = () => (type === 'password' ? setType('text') : setType('password'));
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  // const getWordsOnSubmit = () => [0, 1, 2].forEach((page) => getStartWords(dispatch, page, 0));
  const openLog = () => {
    dispatch(closeRegForm());
    dispatch(openLogForm());
  };
  registred && !apiError.length && setTimeout(() => openLog(), 1000);

  return (
    <div className="auth-wrapper">
      <div className="auth-form-block-wrapper">
        <div className="auth-header">
          <h1>Register</h1>
          <button
            type="button"
            className="auth-close"
            onClick={clickHandler}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="auth-form-wrapper">
          <div className="auth-labels">
            <label htmlFor="name">
              Name:
              <p className="auth-tip">Required</p>
            </label>
            <label htmlFor="email">
              Email:
              <p className="auth-tip">Required</p>
            </label>
            <label htmlFor="password">
              Password:
              <p className="auth-tip">Required</p>
            </label>
          </div>
          <div className="auth-form">
            <form
              className="auth-reg-form"
              onSubmit={handleSubmit(onSubmit)}
              id="auth-form"
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={changeHandler}
                ref={register({
                  required: true,
                  minLength: 3,
                })}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={changeHandler}
                ref={register({
                  required: true,
                  pattern: emailRegex,
                })}
              />
              <div className="auth-password">
                <input
                  type={type}
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={changeHandler}
                  ref={register({
                    required: true,
                    pattern: passRegex,
                  })}
                />
                <button
                  type="button"
                  className="auth-show"
                  onClick={inputTypeHandler}
                >
                  {type === 'password' ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="auth-error">
          {loading ? (
            <Loader />
          ) : (
            <ul className="auth-error-list">
              <li>{errors.name && nameErrorMessage}</li>
              <li>{errors.email && emailErrorMessage}</li>
              <li>{errors.password && passErrorMessage}</li>
              <li className="auth-error-mes">{apiError}</li>
              {registred && !apiError.length ? (
                <li>successfully registred!</li>
              ) : (null)}
            </ul>
          )}
        </div>
        <div className="auth-footer">
          <button
            type="submit"
            className="auth-reg-but"
            form="auth-form"
            // onClick={getWordsOnSubmit}
          >
            <span>submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
