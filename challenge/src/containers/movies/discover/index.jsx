import React from 'react';

import {
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@material-ui/core';

import getStyle from './styles';
import InfoBox from 'components/InfoBox/index.jsx';
import Navbar from 'components/Navbar/index.jsx';

export default function DiscoverPage() {
  const style = getStyle();

  return (
    <React.Fragment>
      <CssBaseline />

      <Navbar />

      <Container className={style.grid} maxWidth="md">
        <Grid container spacing={4}>
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
        </Grid>
      </Container>
    </React.Fragment>
  )
}

