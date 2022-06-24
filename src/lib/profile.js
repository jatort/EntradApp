import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { config } from "../config";

const url = () => config.API_URL;

export const getProfile = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${url()}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  } catch (err) {
    console.log(err.message);
  }
};
