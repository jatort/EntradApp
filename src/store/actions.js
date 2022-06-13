import { AsyncStorage } from 'react-native';
import axios from 'axios';

import { config } from '../config'

const url = () => config.API_URL;

export const Init = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
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
    let token = null;
    try {
      const response = await axios.post(
        `${url()}/login`,
        {
          email,
          password,
        }
      );
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
        type: 'LOGIN_FAIL',
        payload: token,
      })
    }
  }
}

export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};

