import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux';
import { Logout } from '../store/actions';

export default function MyEventsScreen({ route, navigation }) {

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }
  return (
    <View style={styles.root}>
    <ScrollView>
      <Text style={styles.title}>Eventos</Text>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'flex-start',
    flex: 1,
  },
})
