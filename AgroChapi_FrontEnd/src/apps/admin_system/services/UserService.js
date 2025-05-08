import API from '../../../api/axios';

const API_URL = 'core/users/';

export const getUsers = async () => {
  const response = await API.get(API_URL);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await API.delete(`${API_URL}${id}/`);
  return response.data;
};

export const updateUser = async (id, data) => {
  const response = await API.patch(`${API_URL}${id}/`, data);
  return response.data;
};

export const createUser = async (data) => {
  const response = await API.post(API_URL, data);
  return response.data;
};
