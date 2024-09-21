import axios, { AxiosResponse } from 'axios';
import { Image } from './types';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const getImages = async (query: string, currentPage: number) => {
  const response: AxiosResponse<ImageData> = await axios.get('/search/photos', {
    params: {
      query: query,
      page: currentPage,
      per_page: 25,
      client_id: 'UTT7JgALMdvfnsJmdTWAw57zuLYKgVThmUBCZ390Ess',
      orientation: 'landscape',
    },
  });

  return response.data;
};

interface ImageData {
  total: number;
  results: Image[];
  total_pages: number;
}