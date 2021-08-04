import React from 'react';

import { Navigation } from '../Navigation';

import './Header.css';

export const Header = () => {
  console.log('Header');
  return (
    <header>
      {'Hello Header'}
      <Navigation />
    </header>
  );
};
