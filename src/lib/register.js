import ValidateEmail from "../utils/validations/validateMail.js";
import axios from "axios";
import { showMessage } from "react-native-flash-message";

import { config } from "../config";

const url = () => config.API_URL;

export const Register = async (
  username,
  email,
  password,
  passwordValidation,
  role,
  apiKey,
  secretKey
) => {
  if (password !== passwordValidation) {
    showMessage({
      message: "Las contraseñas no coinciden",
      type: "danger",
    });
  } else if (!ValidateEmail(email)) {
    showMessage({
      message: "El email no es válido",
      type: "danger",
    });
  } else {
    // los inputs son correctos
    const body = {
      username: username,
      email: email,
      password: password,
      role: role,
      api: apiKey,
      secret: secretKey,
    };
    try {
      const response = await axios.post(`${url()}/user`, body);
      if (response.status === 201) {
        showMessage({
          message: "Te has registrado exitosamente",
          type: "success",
        });
        return true;
      }
    } catch (error) {
      if (error.message === "User already exists") {
        showMessage({
          message: "El usuario ya existe",
          type: "danger",
        });
      } else {
        console.log(error.message);
        showMessage({
          message: "Error al registrarte",
          type: "danger",
        });
      }
    }
  }
  return false;
};
