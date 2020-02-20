import fetch from 'node-fetch';

export default {
  getImagesConfiguration: () => {
    const options = {
      method: 'GET',
      headers: {
        'Authorization': process.env.API_TOKEN,
        'Content-Type': 'application/json;charset=utf-8',
      },
    };

    const uri = `${process.env.API_URL}/configuration?api_key=${process.env.API_KEY}`;

    return fetch(uri, options)
      .then((response) => response.json())
      .then((json) => json.images);
  },
  discover: (route, query) => {
    const queryWithApiKeys = {
      ...query,
      api_key: process.env.API_KEY,
    };

    const params = Object.keys(queryWithApiKeys)
      .map((key) => `${key}=${queryWithApiKeys[key]}`).join('&');

    const uri = params !== ''
      ? `${process.env.API_URL}${route}?${params}`
      : `${process.env.API_URL}${route}`;

    const options = {
      method: 'GET',
      headers: {
        'Authorization': process.env.API_TOKEN,
        'Content-Type': 'application/json;charset=utf-8',
      },
    };

    return fetch(uri, options)
      .then((response) => response.json())
      .then((json) => json.results);
  }
};
