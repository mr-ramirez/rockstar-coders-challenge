import React, { useState } from 'react';

import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import getStyle from './styles';

export default function SearchInput(props) {
  const [ data, setData ] = useState({
    value: '',
  });

  const valueChangedHandler = (event) => {
    setData({ value: event.target.value });
  };

  const keyPressedHandler = (event) => {
    if (event.key === 'Enter') {
      props.search(data.value);
    }
  };

  const style = getStyle();

  return (
    <div className={style.search}>
      <div className={style.searchIcon}>
        <SearchIcon />
      </div>

      <InputBase
        placeholder="Search for movies"
        classes={{
          root: style.inputRoot,
          input: style.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={valueChangedHandler}
        onKeyPress={keyPressedHandler}
      />
    </div>
  );
}
