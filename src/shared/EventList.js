import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, FlatList } from "react-native";
import EventCard from "./EventCard";
import Colors from "../constants/Colors";
import { Event } from "../types/event";

// Este componente debe hacer fetch de la API para obtener
// los eventos en distintas url segun la pantalla
export const EventList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState();

  useEffect(() => {
    props
      .loadEvents()
      .then((events) => setEvents(events))
      .catch((err) => {
        //los events no se cargan
      });
  }, []);

  const onPress = (event) => {
    props.navigation.navigate("EventsDetail", { event });
  };

  const renderItem = ({ item }) => {
    return (
      <EventCard
        navigation={props.navigation}
        event={item}
        onPress={() => onPress(item)}
      />
    );
  };

  const getHeader = () => {
    return <Text style={styles.title}>{props.title}</Text>;
  };

  return (
    <View style={styles.root}>
      {events && (
        <FlatList
          data={events}
          renderItem={renderItem}
          keyExtractor={(event) => event._id}
          ListHeaderComponent={getHeader}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: "flex-start",
    flex: 1,
  },
});

export default EventList;
