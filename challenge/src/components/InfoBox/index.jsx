import React from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import getStyle from './styles';

export default function InfoBox(props) {
  const {
    image,
    title,
    description,
  } = props;

  const style = getStyle();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={style.container}>
        <CardMedia
          className={style.image}
          image={image}
          title={`${title}_image`}
        />

        <CardContent className={style.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>

          <Typography>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
