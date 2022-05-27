import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { Logout } from '../store/actions';

export default function Profile({ route, navigation }) {

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Button mode='outlined'
          onPress={submit}
          style={{ marginTop: 20 }}>
          Logout</Button>
        <Button mode='outlined'
          onPress={() => navigation.navigate('Feeds')}
          style={{ marginTop: 20 }}>
          Inicio</Button>
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