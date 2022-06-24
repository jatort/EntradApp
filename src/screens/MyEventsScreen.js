import React from "react";
import { StyleSheet, View } from "react-native";
import EventList from "../shared/EventList";
import { getMyEvents } from "../lib/event";
import { useSelector } from "react-redux";

export default function MyEventsScreen({ route, navigation }) {
  const token = useSelector((state) => state.Reducers.authToken);
  return (
    <View style={styles.root}>
      { token && <EventList onPress={() => navigation.navigate("EventsDetail")} navigation={navigation} loadEvents={getMyEvents} title={"Mis Eventos"}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
