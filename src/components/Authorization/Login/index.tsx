import * as React from 'react';
import { useState, useEffect } from 'react';
import { State } from 'models';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {
  passRegex,
  emailRegex,
  nameErrorMessage,
  emailErrorMessage,
  passErrorMessage,
  loginUser,
  getUserSettings,
  getUserStatistic,
} from 'constants/athorization-constants';
import { useForm } from 'react-hook-form';
import {
  removeApiError, closeLogForm, openRegForm,
} from 'containers/Authorisation/actions';
import { getUserWords } from 'containers/TrainingCard/actions';
import { User } from '../models';
import Loader from '../Loader';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state: State) => state.authLog.isLogged);
  const formLoader = useSelector((state: State) => state.authFormLoader.isFormLoad);
  const apiError: string = useSelector((state: State) => state.authErrors.error);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (user: User) => loginUser(user, dispatch);
  const [type, setType] = useState('password');

  const clickHandler = () => {
    dispatch(removeApiError());
    dispatch(closeLogForm());
  };

  const inputTypeHandler = () => (
    type === 'password'
      ? setType('text')
      : setType('password')
  );
  const changeHandler = () => dispatch(removeApiError());
  const removeError = () => {
    dispatch(removeApiError());
    setTimeout(() => dispatch(closeLogForm()), 1500);
  };
  const openRegister = () => {
    dispatch(closeLogForm());
    dispatch(openRegForm());
    dispatch(removeApiError());
  };

  useEffect(() => {
    logged && getUserSettings(dispatch);
    logged && getUserStatistic(dispatch);
    logged && getUserWords(dispatch);
  }, [logged]);

  return (
    <div className="auth-wrapper">
      <div className="auth-form-block-wrapper">
        <div className="auth-header">
          <h1>Log in</h1>
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
          {formLoader ? (
            <Loader />
          ) : (
            <ul className="auth-error-list">
              <li>{errors.name && nameErrorMessage}</li>
              <li>{errors.email && emailErrorMessage}</li>
              <li>{errors.password && passErrorMessage}</li>
              <li className="auth-error-mes">{apiError}</li>
              {logged ? (<span>Authenticated</span>) : (null)}
            </ul>
          )}
        </div>
        <div className="auth-footer">
          {apiError.includes('couldnt find') ? (
            <button
              type="submit"
              className="auth-reg-but"
              form="auth-form"
              onClick={openRegister}
            >
              <span>register</span>
            </button>
          ) : (null)}
          {logged ? (null)
            : (
              <button
                type="submit"
                className="auth-reg-but"
                form="auth-form"
                onClick={removeError}
              >
                <span>log in</span>
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
