import React from 'react';

import { Promo } from './Promo';
import { NavTab } from './NavTab';
import { AboutProject } from './AboutProject';
import { Techs } from './Techs';
import { AboutMe } from './AboutMe';
import { Portfolio } from './Portfolio';

import './Main.css';

export const Main = ({ disabled }) => (
    <main className={'main'}>
      <Promo />
      <NavTab disabled={disabled} />
      <AboutProject />
      <Techs />
      <AboutMe disabled={disabled} />
      <Portfolio disabled={disabled} />
    </main>
);
