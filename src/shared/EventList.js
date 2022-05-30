import React from 'react';
import EventCard from './EventCard';
import Colors from '../constants/Colors';
import { Event } from '../types/event';

type Props = {
  events: Event[];
};

const EventList: React.FC<Props> = ({props: Props}) => {
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
