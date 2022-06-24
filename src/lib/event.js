import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { config } from "../config";

const url = () => config.API_URL;

// const API_URL ="https://entradapp-backend.herokuapp.com/api/v1";

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${url()}/event`);
    return response.data.events.sort((a,b) => a.date > b.date);
  } catch (err) {
    console.log("ERROR: " + err.message);
  }
};

export const getMyEvents = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${url()}/prod/myevents`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.events.sort((a,b) => a.date < b.date);
  } catch (err) {
    throw err;
  }
};
