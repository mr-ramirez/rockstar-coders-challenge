import React, {
  useEffect,
  useState,
} from 'react';

import { CssBaseline } from '@material-ui/core';

import Navbar from 'components/Navbar/index.jsx';

import DiscoverPage from 'containers/movies/discover/index.jsx'

import MovieService from 'services/movieService';

export default function App() {
  const [ data, setData ] = useState({
    imageUri: '',
  });

  useEffect(() => {
    async function fetchConfiguration() {
      const imageConfiguration = await MovieService.getImagesConfiguration();
      const { base_url, poster_sizes } = imageConfiguration;

      setData({
        imageUri: `${base_url}${poster_sizes[2]}`,
      });
    }
    fetchConfiguration();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />

      <Navbar />

      <DiscoverPage imageUri={data.imageUri} />
    </React.Fragment>
  )
}
