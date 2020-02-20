import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';

import { truncateText } from 'helpers';
import { fetchMovies } from './actions';
import getStyle from './styles';

import InfoBox from 'components/InfoBox/index.jsx';
import RatingControl from 'components/RatingControl/index.jsx';

const UNAVAILABLE_IMAGE = 'https://6dollarshirts.com/image/cache//data/designs/contentcurrentlyunavailable/contentcurrentlyunavailable-heather-gray-swatch-400x400.jpg';

export default function DiscoverPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies(dispatch);
  }, []);

  const style = getStyle();

  const {
    imageUri,
    movies,
  } = useSelector((state) => ({
    imageUri: state.app.imageUri,
    movies: state.discover.movies,
  }));

  return (
    <React.Fragment>
      <Container className={style.grid} maxWidth="md">
        <Typography component="h4" variant="h2" align="center" color="textPrimary" gutterBottom>
          Discover
        </Typography>

        <RatingControl setFilter={(value) => console.log('STARS: ', value)} />

        <Grid container spacing={4}>
          {
            movies.map((movie, index) => (
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
  )
}

