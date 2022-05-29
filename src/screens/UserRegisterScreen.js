import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Colors from "../constants/Colors";

import { Button, Surface, TextInput, Text } from "react-native-paper";


export default function UserRegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const submit = () => {
    
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Crear Cuenta</Text>
        <Surface style={styles.box}>
          <View>
            <TextInput
              label="Nombre"
              mode="outlined"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
              label="Apellido"
              mode="outlined"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
            <TextInput
              label="Email"
              mode="outlined"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              label="Usuario"
              mode="outlined"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              label="Fecha de Nacimiento"
              mode="outlined"
              value={birthDate}
              onChangeText={(text) => setBirthDate(text)}
            />
            <TextInput
              label="Contraseña"
              mode="outlined"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              label="Confirmar Contraseña"
              mode="outlined"
              value={passwordValidation}
              onChangeText={(text) => setPasswordValidation(text)}
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
