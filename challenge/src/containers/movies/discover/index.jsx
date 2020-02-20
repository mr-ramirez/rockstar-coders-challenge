import React, {
  useEffect,
  useState,
} from 'react';

import { useSelector } from 'react-redux';

import { Container, Grid } from '@material-ui/core';

import { truncateText } from './helpers';
import getStyle from './styles';

import InfoBox from 'components/InfoBox/index.jsx';
import MovieService from 'services/movieService';

const UNAVAILABLE_IMAGE = 'https://6dollarshirts.com/image/cache//data/designs/contentcurrentlyunavailable/contentcurrentlyunavailable-heather-gray-swatch-400x400.jpg';

export default function DiscoverPage() {
  const [ data, setData ] = useState({
    movies: [],
  });

  useEffect(() => {
    async function fetchMovies() {
      const moviesFetched = await MovieService.discover(
        '/discover/movie',
        { sort_by: 'popularity.desc' },
      );

      setData({ movies: moviesFetched });
    }
    fetchMovies();
  }, []);

  const style = getStyle();
  const imageUri = useSelector((state) => state.app.imageUri);

  return (
    <React.Fragment>
      <Container className={style.grid} maxWidth="md">
        <Grid container spacing={4}>
          {
            data.movies.map((movie, index) => (
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

