import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper'
import { Logout } from '../../store/actions';

export default function ProducerHomeScreen({ route, navigation }) {
  const email = useSelector((state) => state.Reducers.email);
  const role = useSelector((state) => state.Reducers.role);
  const dispatch = useDispatch();
  const submit = () => {
    // dispatch(Logout())
    console.log("Crear Evento");
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Button mode='outlined'
          onPress={() => navigation.navigate("EventRegister")}
          style={{ marginTop: 20 }}>
          Crear Evento</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 16,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
  },
  email: {
    fontSize: 25,
    textAlign: "center",
  },
})