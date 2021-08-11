import React, { useState } from 'react';
import './SearchForm.css';

export const SearchForm = (props) => {
  const { handleSearch, disabled } = props;
  const [searchData, setSearchData] = useState({ short: true, searchString: '' });

  const handleInputChange = (e) => {
    setSearchData({ ...searchData, searchString: e.target.value });
  };
  const handleCheckboxChange = (e) => {
    setSearchData({ ...searchData, short: e.target.checked });
  };
  return (
    <form className={'searchForm'} onSubmit={(e) => handleSearch(e, searchData)} disabled={disabled}>
      <div className={'searchForm__container'}>
        <input
          required={true}
          disabled={disabled}
          className={'searchForm__input'}
          onChange={handleInputChange}
          placeholder={'Фильм'}
          type={'text'} />
        <button
          type={'submit'}
          disabled={disabled || searchData.searchString === ''}
          className={'searchForm__submit'}>
          Поиск
        </button>
      </div>
      <label className={'searchForm__label'}>
        <input
          className={'searchForm__ckeckbox'}
          onChange={handleCheckboxChange}
          type={'checkbox'}
          disabled={disabled} />
        <span className={'searchForm__label-text'}> Короткометражки </span>
      </label>
    </form>
  );
};
