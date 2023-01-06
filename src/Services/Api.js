import axios from 'axios';

const API_KEY = '31369835-3fa2149de848f1cb6ffd48aa5';
const BASE_URL = 'https://pixabay.com';

export const fetchData = (query, page, perPage) => {
  return axios
    .get(
      `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
};
