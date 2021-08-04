import React from 'react';

import { Title } from './Title';
import { NavTab } from './NavTab';
import { AboutProject } from './AboutProject';
import { Techs } from './Techs';
import { AboutMe } from './AboutMe';
import { Portfolio } from './Portfolio';

import './Main.css';

export const Main = () => {
  console.log('Main');
  return (
    <main>
      {'Hello Main'}
      <Title />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};
