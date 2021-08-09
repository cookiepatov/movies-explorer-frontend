import React, { useState } from 'react';
import './SearchForm.css';

export const SearchForm = (props) => {
  const [searchData, setSearchData] = useState({ short: true, searchString: '' });
  const { handleSearch } = props;

  const handleInputChange = (e) => {
    setSearchData({ ...searchData, searchString: e.target.value });
  };
  const handleCheckboxChange = (e) => {
    setSearchData({ ...searchData, short: e.target.checked });
  };
  return (
    <form className={'searchForm'} onSubmit={(e) => handleSearch(e, searchData)}>
      <div className={'searchForm__container'}>
        <input className={'searchForm__input'} onChange={handleInputChange} placeholder={'Фильм'} type={'text'}>

        </input>
        <button className={'searchForm__submit'}>
          Поиск
        </button>
      </div>
      <label className={'searchForm__label'}>
        <input className={'searchForm__ckeckbox'} onChange={handleCheckboxChange} type={'checkbox'} />
        <span className={'searchForm__label-text'}> Короткометражки </span>
      </label>
    </form>
  );
};
