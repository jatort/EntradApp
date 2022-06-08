import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import axios from "axios";
import { config } from "../config";

const url = () => config.API_URL;

// const API_URL ="https://entradapp-backend.herokuapp.com/api/v1";

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${url}/event`);
    return response.data.events;
  } catch (err) {
    console.log(err);
  }
};

export const getMyEvents = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${url}/user/myevents`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.events;
  } catch (err) {
    throw err;
  }
};
