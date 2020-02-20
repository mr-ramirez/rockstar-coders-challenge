import fetch from 'node-fetch';

function constructFetchParameters(route, query, method) {
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
    method,
    headers: {
      'Authorization': process.env.API_TOKEN,
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  return { uri, options };
}

export default {
  get: (route, query) => {
    const { uri, options } = constructFetchParameters(route, query, 'GET');

    return fetch(uri, options)
      .then((response) => response.json())
      .then((json) => json);
  },
};
