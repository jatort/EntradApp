import axios from 'axios';
import { config } from '../config'

const url = () => config.API_URL;

// const API_URL ="https://entradapp-backend.herokuapp.com/api/v1";

export const getAllEvents = async() => {
  try {
    const response = await axios.get(`${url}/event`);
    return response.data.events;
  } catch (err) {
    console.log(err);
  }
};


