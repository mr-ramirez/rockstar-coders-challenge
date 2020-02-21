import React from 'react';

import {
  Button,
  Card,
  CardActions,
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
    onClick
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

        <CardActions>
          <Button size="small" color="primary" onClick={onClick}>
            View more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
