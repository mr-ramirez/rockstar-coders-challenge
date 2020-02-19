import React from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import getStyle from './styles';

export default function InfoBox() {
  const style = getStyle();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={style.container}>
        <CardMedia
          className={style.image}
          image="https://images-na.ssl-images-amazon.com/images/I/7106uLYY2LL._AC_SY606_.jpg"
          title="Inception"
        />

        <CardContent className={style.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Inception
          </Typography>

          <Typography>
            A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
