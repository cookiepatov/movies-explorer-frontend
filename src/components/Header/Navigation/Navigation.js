import { React } from 'react';
import { useHistory } from 'react-router-dom';

import { classNames } from '../../../utils';
import ToggleableLink from '../../TogleableLink/TogglableLink';

import { Auth } from './Auth';
import { Burger } from './Burger';

import './Navigation.css';

const Navigation = (props) => {
  const {
    isLoggedIn, navigationOpened, navButtonClick, disabled,
  } = props;
  const history = useHistory();
  const isCurrentClassName = (linkLocation) => history.location.pathname === linkLocation;
  return (
    isLoggedIn
      ? <>
        <Burger
          isOpened={navigationOpened}
          onClick={navButtonClick}
          disabled={disabled} />
        <nav className={classNames('navigation-container', navigationOpened && 'navigation-container_opened')}>
          <ul className={'navigation'}>
            <li className={'navigation__item'}>
              <ToggleableLink
                disabled={disabled}
                className={classNames('navigation__link', isCurrentClassName('/') && 'navigation__link_current', 'navigation__link_hidden')}
                to={'/'}
                onClick={navigationOpened ? navButtonClick : () => {}}>
                Главная
              </ToggleableLink>
            </li>
            <li className={'navigation__item'}>
              <ToggleableLink
                disabled={disabled}
                className={classNames('navigation__link', isCurrentClassName('/movies') && 'navigation__link_current')}
                to={'/movies'}
                onClick={navigationOpened ? navButtonClick : () => {}}>
                Фильмы
              </ToggleableLink>
            </li>
            <li className={'navigation__item'}>
              <ToggleableLink
                disabled={disabled}
                className={classNames('navigation__link', isCurrentClassName('/saved-movies') && 'navigation__link_current')}
                to={'/saved-movies'}
                onClick={navigationOpened ? navButtonClick : () => {}}>
                Сохраненные&nbsp;фильмы
              </ToggleableLink>
            </li>
          </ul>
          <Auth
            disabled={disabled}
            isLoggedIn={isLoggedIn}
            onClick={navigationOpened ? navButtonClick : () => {}} />
        </nav>
      </>
      : <nav className={classNames('navigation-simple')}>
        <Auth
          disabled={disabled}
          isLoggedIn={isLoggedIn}
          onClick={navigationOpened ? navButtonClick : () => {}} />
      </nav>
  );
};

export default Navigation;
