import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { Logout } from '../store/actions';
import Colors from '../constants/Colors';
import EventList from '../shared/EventList';

export default function LoggedEventsDetailScreen({ route, navigation }) {
    const { event } = route.params;
  return (
    <View style={styles.root}>
      <Text>Nombre: {event.name}</Text>
      <Text>ID: {event.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
