import React from 'react';
import { SectionHeading } from '../SectionHeading';
import './AboutProject.css';

export const AboutProject = () => (
    <section className={'about-project'} id={'about_project'}>
      <SectionHeading
        title={'О пректе'}/>
      <ul className={'stages'}>
        <li className={'item'}>
          <h3 className={'item__heading'}>
            Дипломный проект включал 5 этапов
          </h3>
          <p className={'item__description'}>
            Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className={'item'}>
          <h3 className={'item__heading'}>
          На выполнение диплома ушло 5 недель
          </h3>
          <p className={'item__description'}>
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className={'progressBar'}>
        <div className={'progressBar__item progressBar__item_first'}>
          <p className={'progressBar__text progressBar__text_black'}>
            1 неделя
          </p>
          <p className={'progressBar__caption'}>
            Back-end
          </p>
        </div>
        <div className={'progressBar__item'}>
          <p className={'progressBar__text'}>
            4 недели
          </p>
          <p className={'progressBar__caption'}>
            Front-end
          </p>
        </div>

      </div>
    </section>
);
