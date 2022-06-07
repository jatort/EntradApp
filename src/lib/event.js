import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = "https://entradapp-backend.herokuapp.com/api/v1";

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/event`);
    return response.data.events;
  } catch (err) {
    console.log(err);
  }
};

export const getMyEvents = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${API_URL}/user/myevents`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.events;
  } catch (err) {
    throw err;
  }
};
