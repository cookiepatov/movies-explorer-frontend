import React from 'react';

import { AuthForm } from '../AuthForm';

import './Login.css';

export const Login = () => {
  console.log('Login');
  return (
    <main>
      {'Hello Login'}
      <AuthForm />
    </main>
  );
};
