import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { Logout } from '../store/actions';
import Colors from '../constants/Colors';
import EventList from '../shared/EventList';

export default function MyEventsScreen({ route, navigation }) {

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }
  return (
    <View style={styles.root}>
      <EventList onPress={() => navigation.navigate("EventsDetail")} navigation={navigation} title={"Mis Eventos"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
