import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }
}

export const Login = (email, password) => {
  return async dispatch => {
    let token = null;
    try {
      const response = await axios.post('https://entradapp-backend.herokuapp.com/api/v1/login', {
        email,
        password,
      })
      const {
        data: { token },
      } = response
      await AsyncStorage.setItem('token', token);
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
// export const Login = (username, password) => {
//   return async dispatch => {
//     let token = null;
//     if (username === 'vishal' && password == '1234') {
//       token = username + password;
//       // here we can use login api to get token and then store it
//       await AsyncStorage.setItem('token', token);
//       console.log('token stored');
//     }
//     dispatch({
//       type: 'LOGIN',
//       payload: token,
//     })
//   }
// }

export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT'
    })
  }
}