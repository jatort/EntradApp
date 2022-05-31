import axios from 'axios';

const API_URL ="https://entradapp-backend.herokuapp.com/api/v1";

export const getAllEvents = async() => {
  try {
    const response = await axios.get(`${API_URL}/event`);
    return response.data.events;
  } catch (err) {
    console.log(err);
  }
};


