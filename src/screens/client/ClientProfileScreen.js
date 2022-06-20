import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { Logout } from '../../store/actions';

export default function ClientProfileScreen({ route, navigation }) {
  const [email , setEmail] = useState("");
  const [role , setRole] = useState("");
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }
  const getEmail = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if(value !== null) {
        setEmail(value);
      }
    }  catch (e){
      console.error(e);
    }
  }
  const getRole = async () => {
    try {
      const value = await AsyncStorage.getItem('role');
      if(value !== null) {
        setRole(value);
      }
    }  catch (e){
      console.error(e);
    }
  }
  
  useEffect(() => {
    getEmail();
    getRole();
  }, [])
  

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
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