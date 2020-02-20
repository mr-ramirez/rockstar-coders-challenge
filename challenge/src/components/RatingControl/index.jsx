import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

export default function RatingControl(props) {
  const [ data, setData ] = useState({
    stars: 5,
  });

  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend">Rating</Typography>

      <Rating
        name="simple-controlled"
        value={data.stars}
        onChange={(event, newValue) => {
          setData({ stars: newValue });
          props.setFilter(newValue);
        }}
      />
    </Box>
  );
}
