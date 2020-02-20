import React, {
  useEffect,
  useState,
} from 'react';

import {
  Container,
  CssBaseline,
  Grid,
} from '@material-ui/core';

import { truncateText } from './helpers';
import getStyle from './styles';
import MovieService from 'services/movieService';

import InfoBox from 'components/InfoBox/index.jsx';
import Navbar from 'components/Navbar/index.jsx';

const UNAVAILABLE_IMAGE = 'https://6dollarshirts.com/image/cache//data/designs/contentcurrentlyunavailable/contentcurrentlyunavailable-heather-gray-swatch-400x400.jpg';

export default function DiscoverPage() {
  const [ data, setData ] = useState({
    movies: [],
    imageUri: '',
  });

  useEffect(() => {
    async function fetchInformation() {
      const imageConfiguration = await MovieService.getImagesConfiguration();
      const moviesFetched = await MovieService.discover('/discover/movie', { sort_by: 'popularity.asc' });

      const { base_url, poster_sizes } = imageConfiguration;

      setData({
        movies: moviesFetched,
        imageUri: `${base_url}${poster_sizes[2]}`,
      });
    }
    fetchInformation();
  }, []);

  const style = getStyle();

  return (
    <React.Fragment>
      <CssBaseline />

      <Navbar />

      <Container className={style.grid} maxWidth="md">
        <Grid container spacing={4}>
          {
            data.movies.map((movie, index) => (
              <InfoBox
                key={`movie-${index}`}
                image={movie.poster_path ? `${data.imageUri}${movie.poster_path}` : UNAVAILABLE_IMAGE}
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

