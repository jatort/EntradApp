import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Colors from "../constants/Colors";

import { Button, Surface, TextInput, Text } from "react-native-paper";
import { Register } from "../lib/register";

export default function UserRegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [apiKey, setApikey] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const submit = async () => {
    const registerSuccess = await Register(
      username,
      email,
      password,
      passwordValidation,
      apiKey,
      secretKey,
      "prod"
    );
    if (registerSuccess) {
      navigation.navigate("AuthStack");
    }
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Crear Cuenta</Text>
        <Surface style={styles.box}>
          <View>
            <TextInput
              label="Email"
              mode="outlined"
              value={email}
              onChangeText={(text) => setEmail(text)}
              type="email-address"
              autoComplete="email"
              autoCapitalize="none"
            />
            <TextInput
              label="Usuario"
              mode="outlined"
              value={username}
              onChangeText={(text) => setUsername(text)}
              autoCapitalize="none"
            />
            <TextInput
              label="Contraseña"
              mode="outlined"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <TextInput
              label="Confirmar Contraseña"
              mode="outlined"
              value={passwordValidation}
              onChangeText={(text) => setPasswordValidation(text)}
              secureTextEntry
            />
            <TextInput
              label="apikey Flow"
              mode="outlined"
              value={apiKey}
              onChangeText={(text) => setApikey(text)}
            />
            <TextInput
              label="secretKey"
              mode="outlined"
              value={secretKey}
              onChangeText={(text) => setSecretKey(text)}
            />
          </View>
          <Button
            mode="contained"
            color={Colors.blue}
            style={{ marginTop: 20 }}
            onPress={submit}
          >
            Crear Cuenta
          </Button>
        </Surface>
        <View style={styles.loginText}>
          <Text>¿Ya tienes una cuenta?</Text>
          <Text
            style={styles.loginTextButton}
            onPress={() => navigation.navigate("AuthStack")}
          >
            {" "}
            Iniciar Sesión
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
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
  },

  title: {
    fontSize: 35,
    paddingHorizontal: 5,
    textAlign: "left",
    color: Colors.black,
    marginBottom: 20,
    fontWeight: "normal",
  },
  loginText: {
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
  loginTextButton: {
    color: Colors.purple,
  },
});
