import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { Logout } from "../store/actions";
import Colors from "../constants/Colors";
import EventList from "../shared/EventList";
import { getMyEvents } from "../lib/event";
import { useSelector } from "react-redux";

export default function MyEventsScreen({ route, navigation }) {
  // const dispatch = useDispatch();
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
