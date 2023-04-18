import axios from "axios";
const API_KEY = "639b789931877e43d68d4a2b";
const URL = `https://${API_KEY}.mockapi.io/users`;

async function usersGet(limit, page) {
  const response = await axios.get(`${URL}?limit=${limit}&page=${page || 1}`);
  return response.data;
}

async function putFollow(id, data) {
  const response = await axios.put(`${URL}/${id}`, data);
  return response.data;
}

export { usersGet, putFollow };