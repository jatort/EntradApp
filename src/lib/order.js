import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { response } from "../mock_api/orders";
import { config } from "../config";

const url = () => config.API_URL;

// const API_URL ="https://entradapp-backend.herokuapp.com/api/v1";

export const getMyOrders = async () => {
  try {
    //const response = await axios.get(`${url()}/event`);
    return response.data.orders;
  } catch (err) {
    console.log("ERROR " + err);
  }
};