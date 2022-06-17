import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import EventCard from './EventCard';
import Colors from '../constants/Colors';
import { getMyTickets } from '../lib/ticket';

// Este componente debe hacer fetch de la API para obtener
// los tickets en distintas url segun la pantalla
const TicketList = (props) => {
  const [ tickets, setTickets ] = useState([]);

  useEffect(() => {
    getMyTickets()
      .then(ticks => {
        if (ticks) setTickets(ticks);
      })
      .catch(err => console.log(err));
  }, []);

  const onPress = (ticket) => props.navigation.navigate("TicketDetail", { ticket });


  const renderItem = ({item}) => {
    return (
      <EventCard navigation={props.navigation} event={item.event} onPress={() => onPress(item)}/>
    );
  };

  const getHeader = () => {
    return(
      <Text style={styles.title}>{props.title}</Text>
    );
  };

  return (
    <View style={styles.root}>
    { tickets.length != 0 && 
      <FlatList data={tickets} renderItem={renderItem} keyExtractor={ticket => ticket._id} ListHeaderComponent={getHeader}/>
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

export default TicketList;
