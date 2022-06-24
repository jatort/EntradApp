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
    console.log("ERROR: " + err.message);
    throw err;
  }
};

export const createOrder = async (eventId, nTickets) => {

  const token = await AsyncStorage.getItem("token");

  try {
    const body = {
      eventId,
      nTickets
    };

    const response = await axios.post(`${url()}/order`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log("ERROR: " + err.message);
  }
}