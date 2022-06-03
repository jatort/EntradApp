import { AsyncStorage } from 'react-native';
import axios from 'axios';

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
        "https://entradapp-backend.herokuapp.com/api/v1/login",
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
      // console.log(error)
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

