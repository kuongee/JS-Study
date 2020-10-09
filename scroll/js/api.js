import { API_KEY } from '../.config/config.js';

const BASE_URL = 'https://api.thecatapi.com/v1';

const objectToParams = (obj) =>
  Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

const request = {
  get: async function (url, params = {}) {
    const urlParams = `${url}?${objectToParams(params)}`;
    try {
      const response = await fetch(urlParams, {
        headers: {
          'x-api-key': API_KEY,
        },
      });

      return response.json();
    } catch (e) {
      console.warn(e);
    }
  },
};

const fetchCatItems = async (param = {}) => {
  return await request.get(`${BASE_URL}/images/search`, param);
};

export default { fetchCatItems };
