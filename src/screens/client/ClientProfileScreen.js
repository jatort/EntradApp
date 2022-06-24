import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAccount, Logout } from '../../store/actions';
import { getProfile } from "../../lib/profile";

export default function ClientProfileScreen({ route, navigation }) {
  const [username, setUsername] = useState("");
  const email = useSelector((state) => state.Reducers.email);
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }
  const submitDelete = () => {
    dispatch(DeleteAccount())
  }

  useEffect(() => {
    getProfile()
      .then((user) => {
        if (user) setUsername(user.username);
      })
      .catch((err) => console.log(err));
  }, []);

  const imgUrl = require('../../../assets/logo-clean.png');

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={imgUrl} />
          <Text style={styles.clientTitle}>Usuario: {username}</Text>
          <Text style={styles.clientName}>{email}</Text>
        </View>
        <View style={styles.buttonsView}>
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
  iconView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 150,
    height: 300,
  },
  clientTitle: {
    fontSize: 40,
    marginHorizontal: 5,
    textAlign: "center",
  },
  clientName: {
    fontSize: 25,
    marginHorizontal: 5,
  },
  buttonsView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  }
})