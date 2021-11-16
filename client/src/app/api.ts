export const mainApiUrl: string =
  process.env['NODE_ENV'] === 'production'
    ? window.location.hostname === 'catfact.cf'
      ? 'https://catfact.cf/api'
      : 'https://catsfact.herokuapp.com/api'
    : 'http://localhost:4000/api';

export const apiURL: string =
  'https://catfact.ninja/facts?max_length=100&limit=332';

export const favoriteUrl: string = `${mainApiUrl}/favorites`;
