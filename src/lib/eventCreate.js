import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { config } from "../config";
import ValidateEvent from "../utils/validations/validateEvent";

const url = () => config.API_URL;

export const EventCreate = async (
  name,
  category,
  date,
  dateLimitBuy,
  description,
  nTickets,
  imageUrl,
  price,
  city,
  address,
) => {
  try {
    const cleanBody = {
      name: name,
      category: category,
      date: date,
      dateLimitBuy: dateLimitBuy,
      description: description,
      nTickets: nTickets,
      imageUrl: imageUrl,
      price: price,
      city: city,
      address: address,
    };
    const body = {
      name: name,
      category: category,
      date: date,
      dateLimitBuy: dateLimitBuy,
      description: description,
      nTickets: parseInt(nTickets),
      imageUrl: imageUrl,
      price: parseInt(price),
      city: city,
      address: address,
    };
    const validate_msg = ValidateEvent(cleanBody);
    if (validate_msg) {
      alert(validate_msg);
      return(1);
    }
    const token = await AsyncStorage.getItem("token");
    const response = await axios.post(`${url()}/event`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 201) {
      alert("Evento creado exitosamente");
      return 0;
    } else {
      alert("Evento no se pudo crear, modifique el contenido");
    }
  } catch (error) {
    console.log(error.message);
    alert("Error al registrar evento");
    return 2;
  }
  return 3;
};
