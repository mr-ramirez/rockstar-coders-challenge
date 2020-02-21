import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';

import { truncateText } from 'helpers';
import { fetchMovies, setRating } from './actions';
import getStyle from './styles';

import DetailsView from 'components/DetailsView/index.jsx';
import InfoBox from 'components/InfoBox/index.jsx';
import MovieContent from './movieContent.jsx';
import RatingControl from 'components/RatingControl/index.jsx';

const UNAVAILABLE_IMAGE = 'https://6dollarshirts.com/image/cache//data/designs/contentcurrentlyunavailable/contentcurrentlyunavailable-heather-gray-swatch-400x400.jpg';

export default function DiscoverPage() {
  const [ data, setData ] = useState({
    openDialog: false,
    selectedMovie: {},
  });

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies(dispatch, {});
  }, []);

  const style = getStyle();

  const {
    imageUri,
    movies,
    rating,
  } = useSelector((state) => ({
    imageUri: state.app.imageUri,
    movies: state.discover.movies,
    rating: state.discover.rating,
  }));

  const displayMovieDetails = (movie) => {
    setData({
      openDialog: true,
      selectedMovie: movie,
    });
  };

  const hideMovieDetails = () => {
    setData({
      openDialog: false,
      selectedMovie: {},
    });
  };

  return (
    <React.Fragment>
      <DetailsView
        title={data.selectedMovie.title}
        onClose={hideMovieDetails}
        open={data.openDialog}
      >
        <MovieContent
          description={data.selectedMovie.description}
          image={
            imageUri && data.selectedMovie.image
              ? `${imageUri}${data.selectedMovie.image}`
              : UNAVAILABLE_IMAGE
          }
          releaseDate={data.selectedMovie.releaseDate}
          language={data.selectedMovie.language}
        />
      </DetailsView>

      <Container className={style.grid} maxWidth="md">
        <Typography component="h4" variant="h2" align="center" color="textPrimary" gutterBottom>
          Discover
        </Typography>

        <RatingControl
          rating={rating}
          setRating={(newRating) => {
            dispatch(setRating(newRating));

            if (rating !== newRating) {
              fetchMovies(dispatch, { rating: newRating });
            }
          }}
        />

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
                onClick={() => displayMovieDetails(movie)}
              />
            ))
          }
        </Grid>
      </Container>
    </React.Fragment>
  )
}

