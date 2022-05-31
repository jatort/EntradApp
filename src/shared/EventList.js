import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';
import EventCard from './EventCard';
import Colors from '../constants/Colors';
import { Event } from '../types/event';
import { getAllEvents } from '../lib/event';

type Props = {
  events: Event[];
  apiUrl: string;
  title: string;
};

// Este componente debe hacer fetch de la API para obtener
// los eventos en distintas url segun la pantalla
const EventList: React.FC<Props> = (props: Props) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ events, setEvents ] = useState([]);

  useEffect(() => {
    getAllEvents()
      .then(events => {console.log(events); setEvents(events);})
      .catch(err => console.log(err));
  }, []);

  const renderItem = ({item}) => {
    return (
      <EventCard event={item} />
    );
  };

  const getHeader = () => {
    return(
      <Text style={styles.title}>{props.title}</Text>
    );
  };

  return (
    <View style={styles.root}>
    { events.length != 0 && 
      <FlatList data={events} renderItem={renderItem} keyExtractor={event => event._id} ListHeaderComponent={getHeader}/>
    }
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
