export const apiURL: string = 'https://catfact.ninja/facts?limit=332';
export const favoriteUrl: string =
  process.env['NODE_ENV'] === 'production'
    ? window.location.hostname === 'catfact.cf'
      ? 'https://catfact.cf/api/favorites'
      : 'https://catsfact.herokuapp.com/api/favorites'
    : 'http://localhost:4000/api/favorites';
