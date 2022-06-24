import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { Button, Text } from "react-native-paper";
import loginLogo from "../../assets/logo-clean.png";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.loginLogoContainer}>
        <Image source={loginLogo} style={styles.loginLogo} />
      </View>
      <View style={styles.belowLogoContainer}>
        <Text style={styles.title}>Registrarse</Text>
        <Button
          mode="contained"
          color={Colors.blue}
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('UserRegister')}
        >
          Usuario
        </Button>
        <Button
          mode="contained"
          color={Colors.blue}
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('ProducerRegister')}
        >
          Productora
        </Button>
      </View>
      <View style={styles.endContainer}></View>
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
  loginLogoContainer: {
    flex: 3,
    alignItems: "center",
  },
  loginLogo: {
    width: 250,
    height: 150,
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
  belowLogoContainer: {
    flex: 3,
    justifyContent: 'space-around',
  },
  endContainer: {
    flex: 2,
  }
});
