import axios from 'axios';
import { config } from "../config";

const url = () => config.API_URL;

export const getUser = async(id) => {
  try {
    const response = await axios.get(`${url()}/user/${id}`);
    return response.data.user;
  } catch (err) {
    console.log(err);
  }
};
