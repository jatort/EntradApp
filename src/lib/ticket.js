import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { config } from "../config";

const url = () => config.API_URL;

export const getMyTickets = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${url()}/ticket`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const validTickets = getValidTickets(response.data.tickets);
    return validTickets.sort((a, b) => a.event.date > b.event.date);
  } catch (err) {
    console.log(err.message);
  }
};

const getValidTickets = (tickets) =>
  tickets.filter((ticket) => ticket.event.date > new Date().toISOString());
