import fetch from 'node-fetch';

export function get(route, query) {
  const params = Object.keys(query)
    .map((key) => `${key}=${query[key]}`).join('&');

  const uri = params !== ''
    ? `${process.env.MOVIEDB_URL}${route}?params`
    : `${process.env.MOVIEDB_URL}${route}`;

  const options = {
    method: 'GET',
    headers: {
      'Authorization': process.env.MOVIEDB_TOKEN,
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  return fetch(uri, options)
    .then((response) => response.json())
    .then((json) => json);
}
