import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';

import { truncateText } from 'helpers';
import getStyle from './styles';

import Constants from 'constants';
import DetailsView from 'components/DetailsView/index.jsx';
import InfoBox from 'components/InfoBox/index.jsx';
import MovieContent from './movieContent.jsx';

export default function MoviesListDisplayer(props) {
  const [ data, setData ] = useState({
    openDialog: false,
    selectedMovie: {},
  });

  const style = getStyle();

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
            props.imageUri && data.selectedMovie.image
              ? `${props.imageUri}${data.selectedMovie.image}`
              : Constants.UnavailableImage
          }
          releaseDate={data.selectedMovie.releaseDate}
          language={data.selectedMovie.language}
          genreIds={data.selectedMovie.genreIds}
          genresList={props.genresList}
        />
      </DetailsView>

      <Container className={style.grid} maxWidth="md">
        {props.children}

        <Grid container spacing={4}>
          {
            props.movies.map((movie, index) => (
              <InfoBox
                key={`movie-${index}`}
                image={
                  props.imageUri && movie.image
                    ? `${props.imageUri}${movie.image}`
                    : Constants.UnavailableImage
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

