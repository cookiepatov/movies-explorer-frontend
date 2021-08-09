import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { classNames } from '../../../utils';

import { Auth } from './Auth';
import { Burger } from './Burger';

import './Navigation.css';

const Navigation = (props) => {
  const { toggleShading, isLoggedIn } = props;
  const [isOpened, setIsOpened] = useState(false);
  const history = useHistory();
  const toggleNavigation = () => {
    setIsOpened(!isOpened);
    toggleShading();
  };
  const closeNavigation = () => {
    if (isOpened) {
      toggleNavigation();
    }
  };
  const isCurrentClassName = (linkLocation) => history.location.pathname === linkLocation;
  return (
    isLoggedIn
      ? <>
        <Burger
          isOpened={isOpened}
          onClick={toggleNavigation} />
        <nav className={classNames('navigation-container', isOpened && 'navigation-container_opened')}>
          <ul className={'navigation'}>
            <li className={'navigation__item'}>
              <Link
                className={classNames('navigation__link', isCurrentClassName('/') && 'navigation__link_current', 'navigation__link_hidden')}
                to={'/'}
                onClick={closeNavigation}>
                Главная
              </Link>
            </li>
            <li className={'navigation__item'}>
              <Link
                className={classNames('navigation__link', isCurrentClassName('/movies') && 'navigation__link_current')}
                to={'/movies'}
                onClick={closeNavigation}>
                Фильмы
              </Link>
            </li>
            <li className={'navigation__item'}>
              <Link
                className={classNames('navigation__link', isCurrentClassName('/saved-movies') && 'navigation__link_current')}
                to={'/saved-movies'}
                onClick={closeNavigation}>
                Сохраненные&nbsp;фильмы
              </Link>
            </li>
          </ul>
          <Auth
            isLoggedIn={isLoggedIn}
            onClick={closeNavigation} />
        </nav>
      </>
      : <nav className={classNames('navigation-simple')}>
        <Auth
          isLoggedIn={isLoggedIn}
          onClick={closeNavigation} />
      </nav>
  );
};

/* export default withRouter(Navigation); */
export default Navigation;
