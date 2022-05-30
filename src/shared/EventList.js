import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import EventCard from './EventCard';
import Colors from '../constants/Colors';
import { Event } from '../types/event';

type Props = {
  events: Event[];
  apiUrl: string;
  title: string;
};

// Este componente debe hacer fetch de la API para obtener
// los eventos en distintas url segun la pantalla
const EventList: React.FC<Props> = (props: Props) => {
  return (
   <View style={styles.root}>
    <ScrollView>
      <Text style={styles.title}>{props.title}</Text>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </ScrollView>
  </View> 
  );
};

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
});

export default EventList;
