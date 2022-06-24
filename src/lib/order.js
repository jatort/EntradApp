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
    const orders = getValidOrders(response.data.orders);
    return orders.sort((a,b) => a.event.date > b.event.date);
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
    throw err;
  }
}

const getValidOrders = (orders) => {
  const filteredOrders = [];
  orders.forEach(order => {
    if (order.event) filteredOrders.push(order);
  });
  return filteredOrders;
}