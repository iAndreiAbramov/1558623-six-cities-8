import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestLoginAction } from '../../store/api-actions';

function LoginPageForm(): JSX.Element {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginInput = (evt: FormEvent<HTMLInputElement>): void => {
    evt.preventDefault();
    setEmail(evt.currentTarget.value);
  };
  const handlePasswordInput = (evt: FormEvent<HTMLInputElement>): void => {
    evt.preventDefault();
    setPassword(evt.currentTarget.value.trimLeft());
  };

  return (
    <form className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={ email }
          onInput={ handleLoginInput }
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={ password }
          onInput={ handlePasswordInput }
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        onClick={
          (evt) => {
            evt.preventDefault();
            dispatch(requestLoginAction({ email, password }));
          }
        }
      >
        Sign in
      </button>
    </form>
  );
}

export default LoginPageForm;
