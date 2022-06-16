import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { config } from "../config";

const url = () => config.API_URL;

export const Init = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      dispatch({
        type: "LOGIN",
        payload: token,
      });
    }
  };
};

export const Login = (email, password) => {
  return async (dispatch) => {
    let token;
    const body = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(`${url()}/login`, body);

      const {
        data: { token },
      } = response;
      await AsyncStorage.setItem("token", token);
      dispatch({
        type: "LOGIN",
        payload: token,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: token,
      });
      console.log(error.message);
    }
  };
};

export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};
