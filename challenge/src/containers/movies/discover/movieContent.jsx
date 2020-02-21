import React from 'react';

import {
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import getStyles from './styles';

export default function MovieContent(props) {
  const {
    description, image, releaseDate,
    language, genresList, genreIds,
  } = props;

  const styles = getStyles();

  let genresNames = [];

  if (genreIds) {
    genresNames = genreIds.map((id) => {
      const genre = genresList.find((item) => item.id === id);
      return genre ? genre.name : '';
    });
  }

  return (
    <div>
      <CardMedia
        className={styles.media}
        image={image}
        title="Movie details image"
      />

      <CardContent>
        <Typography
          variant="body2"
          color="textPrimary"
          component="p"
          className={styles.movieDescription}
        >
          {description}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Release Date:</strong> {releaseDate}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Language:</strong> {language ? language.toUpperCase() : ''}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Genres:</strong> {genresNames.join(', ')}
        </Typography>
      </CardContent>
    </div>
  )
}
