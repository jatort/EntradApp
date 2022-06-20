import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { showMessage } from "react-native-flash-message";

import { config } from "../config";

const url = () => config.API_URL;

export const Init = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");
    const email = await AsyncStorage.getItem("email");
    const role = await AsyncStorage.getItem("role");
    if (token !== null) {
      dispatch({
        type: "LOGIN",
        payload: token,
        email: email,
        role: role,
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
      let { email, role } = jwt_decode(token);
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("role", role);
      dispatch({
        type: "LOGIN",
        payload: token,
        email: email,
        role: role,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: token,
      });
      showMessage({
        message: "Error al iniciar sesión",
        type: "danger",
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
