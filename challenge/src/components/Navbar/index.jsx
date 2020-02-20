import React from 'react';

import {
  AppBar,
  LinearProgress,
  Toolbar,
  Typography,
} from '@material-ui/core';

import SearchInput from 'components/SearchInput/index.jsx';

export default function Navbar(props) {
  const { showProgressBar } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Movie Teather
        </Typography>

        <SearchInput search={props.search} />
      </Toolbar>

      { showProgressBar && <LinearProgress color="secondary" /> }
    </AppBar>
  )
}

