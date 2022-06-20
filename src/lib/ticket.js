import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { config } from '../config'

const url = () => config.API_URL;

export const getMyTickets = async() => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${url()}/ticket`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return getValidTickets(response.data.tickets);
  } catch (err) {
    console.log(err);
  }
};

const getValidTickets = (tickets) => tickets.filter(ticket => ticket.event.date > new Date().toISOString())