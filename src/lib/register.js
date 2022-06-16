import ValidateEmail from "../utils/validations/validateMail.js";
import axios from "axios";

import { config } from "../config";

const url = () => config.API_URL;

export const Register = async (
  username,
  email,
  password,
  passwordValidation,
  role
) => {
  if (password !== passwordValidation) {
    alert("Las contraseñas no coinciden");
  } else if (!ValidateEmail(email)) {
    alert("El email no es válido");
  } else {
    // los inputs son correctos
    const body = {
      username: username,
      email: email,
      password: password,
      role: role,
    };
    try {
      const response = await axios.post(`${url()}/user`, body);
      if (response.status === 201) {
        alert("Te has registrado exitosamente");
        return true;
      }
    } catch (error) {
      if (error.message === "User already exists") {
        alert("El usuario ya existe");
      } else {
        console.log(error.message);
        alert("Error al registrarte");
      }
      return false;
    }
  }
};
