import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { config } from "../config";

const url = () => config.API_URL;

export const getMyOrders = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${url()}/order`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.orders;
  } catch (err) {
    console.log("ERROR " + err);
  }
};