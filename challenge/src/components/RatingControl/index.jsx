import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

export default function RatingControl(props) {
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend">Rating</Typography>

      <Rating
        name="simple-controlled"
        value={props.rating}
        onChange={(event, newValue) => props.setRating(newValue)}
      />
    </Box>
  );
}
