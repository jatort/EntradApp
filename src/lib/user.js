import axios from 'axios';

const API_URL ="https://entradapp-backend.herokuapp.com/api/v1";

export const getUser = async(id) => {
  try {
    const response = await axios.get(`${API_URL}/user/${id}`);
    return response.data.user;
  } catch (err) {
    console.log(err);
  }
};
