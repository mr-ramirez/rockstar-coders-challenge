import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';

import { truncateText } from 'helpers';
import getStyle from './styles';

import InfoBox from 'components/InfoBox/index.jsx';

const UNAVAILABLE_IMAGE = 'https://6dollarshirts.com/image/cache//data/designs/contentcurrentlyunavailable/contentcurrentlyunavailable-heather-gray-swatch-400x400.jpg';

export default function SearchPage() {
  const style = getStyle();

  const {
    imageUri,
    results,
  } = useSelector((state) => ({
    imageUri: state.app.imageUri,
    results: state.search.results,
  }));

  return (
    <React.Fragment>
      <Container className={style.grid} maxWidth="md">
        <Typography component="h4" variant="h2" align="center" color="textPrimary" gutterBottom>
          Search Results
        </Typography>
        <Grid container spacing={4}>
          {
            results.map((movie, index) => (
              <InfoBox
                key={`movie-${index}`}
                image={
                  imageUri && movie.image
                    ? `${imageUri}${movie.image}`
                    : UNAVAILABLE_IMAGE
                }
                title={movie.title}
                description={truncateText(movie.description)}
              />
            ))
          }
        </Grid>
      </Container>
    </React.Fragment>
  );
}
