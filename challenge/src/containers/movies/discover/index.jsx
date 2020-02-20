import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

import { truncateText } from './helpers';
import { fetchMovies } from './actions';
import getStyle from './styles';

import InfoBox from 'components/InfoBox/index.jsx';

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
        <Grid container spacing={4}>
          {
            movies.map((movie, index) => (
              <InfoBox
                key={`movie-${index}`}
                image={
                  imageUri && movie.poster_path
                    ? `${imageUri}${movie.poster_path}`
                    : UNAVAILABLE_IMAGE
                }
                title={movie.original_title}
                description={truncateText(movie.overview)}
              />
            ))
          }
        </Grid>
      </Container>
    </React.Fragment>
  )
}

