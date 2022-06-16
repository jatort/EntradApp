import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper'
import { Logout } from '../../store/actions';

export default function ProducerProfileScreen({ route, navigation }) {
  const email = useSelector((state) => state.Reducers.email);
  const role = useSelector((state) => state.Reducers.role);
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
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