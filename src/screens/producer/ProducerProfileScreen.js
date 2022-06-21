import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper'
import { DeleteAccount, Logout } from '../../store/actions';

export default function ProducerProfileScreen({ route, navigation }) {
  const email = useSelector((state) => state.Reducers.email);
  const role = useSelector((state) => state.Reducers.role);
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }

  const submitDelete = () => {
    dispatch(DeleteAccount())
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Producer profile screen</Text>
        <Text>Email: {email}</Text>
        <Text>Role: {role}</Text>
        <Button mode='outlined'
          onPress={submit}
          style={{ marginTop: 20 }}>
          Cerrar Sesión</Button>
        <Button mode='outlined'
          onPress={submitDelete}
          style={{ marginTop: 40 }}>
          Eliminar Cuenta</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginHorizontal: 4,
  },
})