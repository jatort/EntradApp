import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import { Logout } from '../store/actions';
import Colors from '../constants/Colors';
import EventList from '../shared/EventList';
import { getAllEvents } from '../lib/event';
import { Event } from '../types/event';

export default function PublicEventsScreen({ route, navigation }) {
  const [events, setEvents] = useState([]);

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }

  const handleOnClick = async () =>{
    console.log("Clicking!");
    const events = await getAllEvents();
    console.log("Eventos:");
    console.log(events);
    setEvents(events);
  }
  /*useEffect(async() => {
    const events = await getAllEvents();
    console.log("Use effect");
  }, []);*/

  return (
    <View style={styles.root}>
      <EventList title={"Eventos públicos"} events={events}/>
      <Button onPress={() => handleOnClick()} title="Eventos" />

    </View>

  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
