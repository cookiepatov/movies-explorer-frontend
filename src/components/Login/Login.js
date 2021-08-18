import { React, useState, useEffect } from 'react';

import { AuthForm } from '../AuthForm';
import { LogoBtn } from '../LogoBtn/LogoBtn';

import './Login.css';

export const Login = (props) => {
  const { handleLogin, disabled, authError } = props;
  const [inputsValidity, setValidity] = useState({ email: true, password: true });
  const [formValiduty, setFormValidity] = useState(false);
  const [inputValues, setInputValues] = useState({ password: '', email: '' });
  const [errorMsgs, setErrorMsgs] = useState({ password: '', email: '' });
  const handleChange = (e) => {
    const {
      name, validity, validationMessage, value,
    } = e.target;
    setValidity({ ...inputsValidity, [name]: validity.valid });
    setErrorMsgs({ ...errorMsgs, [name]: validationMessage });
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    const inputs = Object.keys(inputsValidity);
    const valid = inputs.every((field) => inputsValidity[field] === true);
    setFormValidity(valid && inputs.every((field) => inputValues[field] !== ''));
  }, [inputValues]);

  return (
    <main className={'login'}>
      <LogoBtn disabled={disabled} />
      <h2 className={'login__message'}>Рады видеть!</h2>
      <AuthForm
        authError={authError}
        disabled={disabled}
        isRegister={false}
        formValidity={formValiduty}
        inputsValidity={inputsValidity}
        errorMsgs={errorMsgs}
        onSubmit={(e) => handleLogin(e, inputValues)}
        onChange={handleChange}/>
    </main>
  );
};
