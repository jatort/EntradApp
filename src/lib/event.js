import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

//const API_URL = "localhost:3000/api/v1";
//const API_URL ="https://entradapp-backend.herokuapp.com/api/v1";
const API_URL="http://192.168.64.248:3000/api/v1";

export const getAllEvents = async() => {
  try{//let token = await oAsyncStorage.getItem('token');
  
  const response = await axios.get(`${API_URL}/event`);
  return response.data.events;
  } catch (err) {
    console.log(err);
  }
};


