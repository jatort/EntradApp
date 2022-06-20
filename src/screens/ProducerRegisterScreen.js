import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Colors from "../constants/Colors";

import { Button, Surface, TextInput, Text } from "react-native-paper";
import { registerAnimation } from "react-native-animatable";
import { Register } from "../lib/register";

export default function UserRegisterScreen({ navigation }) {
  /* const [producerName, setProducerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); */
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [contactEmail, setContactEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  // const [description, setDescription] = useState("");

  const submit = async () => {
    const registerSuccess = await Register(
      username,
      email,
      password,
      passwordValidation,
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
            {/* <TextInput
              label="Nombre"
              mode="outlined"
              value={producerName}
              onChangeText={(text) => setProducerName(text)}
            /> */}
            {/* <TextInput
              label="Telefono de Contacto"
              mode="outlined"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            /> */}
            <TextInput
              label="Email"
              mode="outlined"
              value={email}
              onChangeText={(text) => setEmail(text)}
              type="email-address"
              autoComplete="email"
              autoCapitalize='none'
            />
            <TextInput
              label="Usuario"
              mode="outlined"
              value={username}
              onChangeText={(text) => setUsername(text)}
              autoCapitalize='none'
            />
            {/* <TextInput
              label="Email de Contacto"
              mode="outlined"
              value={contactEmail}
              onChangeText={(text) => setContactEmail(text)}
            /> */}
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
            {/* <TextInput
              label="Descripción"
              mode="outlined"
              value={description}
              onChangeText={(text) => setDescription(text)}
            /> */}
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
