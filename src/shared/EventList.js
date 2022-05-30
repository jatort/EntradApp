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
    console.log("Rendering events");
    /*console.log(props.events);
    if (props.events.length > 0) setIsLoading(false);*/
    getAllEvents().then(events => {setEvents(events);});
  }, []);

  const renderItem = ({event}) => {
    return (
      <EventCard event={event} />
    );
  };

  return (
   <View style={styles.root}>
    <ScrollView>
    { events.length == 0 ? 
      <View style={styles.root}> 
      <Text style={styles.title}>{props.title} Loading</Text>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      </View>:
      <View style={styles.root}>
          <Text style={styles.title}>{props.title} Loaded</Text>
        <FlatList data={events} renderItem={renderItem} keyExtractor={event => event._id}/>
      </View>
    }
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
