import React from 'react';

import {
  AppBar,
  LinearProgress,
  Toolbar,
  Typography,
} from '@material-ui/core';

export default function Navbar(props) {
  const { showProgressBar } = props;

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Movie Teather
        </Typography>
      </Toolbar>

      { showProgressBar && <LinearProgress color="secondary" /> }
    </AppBar>
  )
}

