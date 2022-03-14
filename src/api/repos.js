import axios from 'axios';
import { SERVER_URL } from '../common/constants';

export const getRepos = async (search = '') => {
  let params = {};
  if (search) {
    params.search = search;
  }

  const response = await axios({
    method: 'GET',
    url: `${SERVER_URL}/github-repos`,
    params: params,
  });

  return response.data;
};

export const getRepoById = async (id) => {
  const response = await axios({
    method: 'GET',
    url: `${SERVER_URL}/github-repos/${id}`,
  });

  return response.data;
};

export const forceSync = async () => {
  await axios({
    method: 'GET',
    url: `${SERVER_URL}/github-repos/reset`,
  });
};
