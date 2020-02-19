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

      <main>
        <div className={style.mainContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Discover Page
            </Typography>
          </Container>
        </div>
      </main>


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

