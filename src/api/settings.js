import axios from 'axios';
import { SERVER_URL } from '../common/constants';

export const getSettings = async () => {
  const response = await axios({
    method: 'GET',
    url: `${SERVER_URL}/github-repos/settings`,
  });

  return response.data;
};

export const setSettings = async (settings) => {
  const response = await axios({
    method: 'POST',
    url: `${SERVER_URL}/github-repos/settings`,
    data: {
      ...settings,
    },
  });

  return response.data;
};
