import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Image, StyleSheet, View } from "react-native";

import { Login } from "../store/actions";
import Colors from "../constants/Colors";

import { showMessage } from "react-native-flash-message";

import { Button, Surface, TextInput, Text } from "react-native-paper";

import loginLogo from "../../assets/logo-clean.png";
import ValidateEmail from "../utils/validations/validateMail";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const submit = () => {
    const validEmail = ValidateEmail(username)
    if(!validEmail) {
      return showMessage({
      message: "Correo inválido",
      type: "danger",
      });
    }
    dispatch(Login(username, password));
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginLogoContainer}>
        <Image source={loginLogo} style={styles.loginLogo} />
      </View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Surface style={styles.box}>
        <View>
          <TextInput
            testID="email"
            label="example@gmail.com"
            mode="outlined"
            value={username}
            onChangeText={(text) => setUsername(text)}
            type="email-address"
            autoComplete="email"
            autoCapitalize='none'
          />
          <TextInput
            testID="password"
            label="password"
            mode="outlined"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            autoCapitalize='none'
          />
        </View>
        <Button
          testID="loginButton"
          mode="contained"
          color={Colors.blue}
          style={{ marginTop: 20 }}
          onPress={submit}
        >
          Iniciar Sesión
        </Button>
      </Surface>
      <View style={styles.registerText}>
        <Text>¿No tienes una cuenta?</Text>
        <Text
          style={styles.registerTextButton}
          onPress={() => navigation.navigate("Register")}
        >
          {" "}
          Registrarse
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 28,
    backgroundColor: Colors.white,
  },
  box: {
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    height: 250,
  },
  loginLogoContainer: {
    flex: 1,
    alignItems: "center",
  },
  loginLogo: {
    width: 200,
    height: 120,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 5,
    textAlign: "left",
    color: Colors.black,
    marginBottom: 20,
    fontWeight: "bold",
  },
  registerText: {
    fontSize: 15,
    paddingTop: 25,
    paddingHorizontal: 5,
    textAlign: "center",
    color: Colors.black,
    marginBottom: 20,
    fontWeight: "normal",
    flexDirection: "row",
    justifyContent: "center",
  },
  registerTextButton: {
    color: Colors.purple,
  },
});
