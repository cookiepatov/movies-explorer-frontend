import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const history = useHistory();
  return (
    <main className={'notFound'}>
      <h1 className={'notFound__heading'}>404</h1>
      <p className={'notFound__meassage'}>Страница не найдена</p>
      <button
        className={'notFound__link'}
        onClick={() => history.goBack()}>
          Назад
      </button>
    </main>
  );
};

export default withRouter(NotFound);
